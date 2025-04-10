// /app/api/financial/route.ts
// (or /pages/api/financial.ts if you’re using the pages directory)

// Import necessary types and utilities.
import { NextResponse, NextRequest } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Import your utility functions that call the Finnhub API.
import { fetchStockData, fetchCompanyNews } from "../../../utils/finnhub";
// Import your symbol extractor – this should pick ticker symbols from a text.
import { extractSymbols } from "../../../utils/symbolExtractor";

// This handler supports both direct function calls (via an "action") and a general prompt mode.
// The direct function call mode lets Gemini (or any client) request data for a given symbol.
// For example, sending an action "fetchStockData" will immediately return the stock data for a provided symbol.

// Import necessary types and utilities.


export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.prompt) {
      return NextResponse.json({ error: "Missing prompt." }, { status: 400 });
    }

    const prompt = body.prompt;
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

    let refinedUserPrompt = prompt;
    let symbols = extractSymbols(refinedUserPrompt);

    if (symbols.length === 0) {
      const cleanupConfig = {
        model: "gemini-2.0-flash",
        contents: `
          You are an uncompromising, no-nonsense expert in cleaning up and standardizing financial queries.
          You MUST rigorously rewrite the following query: correct every typo, clarify the question, and adjust the phrasing as necessary.
          If—and only if—the query explicitly requests a stock price, you are REQUIRED to append the correct ticker symbol(s) using the format ($TICKER). Under no circumstances are you allowed to insert any ticker symbol based on assumption or vague context.
          Query: "${prompt}"
        `,
        maxOutputTokens: 100,
        temperature: 0,
      };

      const cleanupResult = await ai.models.generateContent(cleanupConfig);
      refinedUserPrompt = (cleanupResult.text ?? "").trim();

      symbols = extractSymbols(refinedUserPrompt);
    }

    let finalPrompt: string;
    if (symbols.length > 0) {
      const tickerData = await Promise.all(
        symbols.map(async (ticker) => {
          const stock = await fetchStockData(ticker);
          const news = await fetchCompanyNews(ticker);
          const summaryNews = news
            .slice(0, 3)
            .map((n: any) => `- ${n.headline}: ${n.summary}`)
            .join("\n");
          return { ticker, stock, summaryNews };
        }),
      );

      const tickerSections = tickerData
        .map(
          ({ ticker, stock, summaryNews }) => `
            > Stock Ticker: ${ticker}
            > Current Price: $${stock.c}
            > High: $${stock.h}, Low: $${stock.l}, Open: $${stock.o}, Prev. Close: $${stock.pc}
            > Recent News:
            ${summaryNews}
          `,
        )
        .join("\n");

      finalPrompt = `
        You are a seasoned Wall Street investor. The user originally asked:
        "${prompt}"
        After clarification, the interpreted query is:
        "${refinedUserPrompt}"

        ${tickerSections}

        Please keep your answer insightful and concise. Format each point as a blockquote (with '>'), and remind the user that this is not financial advice.
      `;
    } else {
      finalPrompt = `
        You are a seasoned Wall Street investor. The user originally asked:
        "${prompt}"
        After clarification, the interpreted query is:
        "${refinedUserPrompt}"

        Please respond naturally and conversationally.
      `;
    }

    const config = {
      model: "gemini-2.0-flash",
      contents: finalPrompt,
      maxOutputTokens: 500,
      temperature: 0,
    };

    const result = await ai.models.generateContent(config);
    return NextResponse.json({ response: result.text });
  } catch (error: any) {
    console.error("Internal API error:", error);
    return NextResponse.json(
      { error: "Internal error", details: error.message },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get('symbol');
  const apiKey = process.env.FINNHUB_API_KEY;

  const today = new Date();
  const prior = new Date();
  prior.setDate(today.getDate() - 7);

  const from = prior.toISOString().split("T")[0];
  const to = today.toISOString().split("T")[0];

  const quoteUrl = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
  const newsUrl = `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${from}&to=${to}&token=${apiKey}`;

  try {
    const [quoteRes, newsRes] = await Promise.all([
      fetch(quoteUrl),
      fetch(newsUrl),
    ]);

    const [stock, news] = await Promise.all([
      quoteRes.json(),
      newsRes.json(),
    ]);

    return NextResponse.json({ stock, news });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch stock or news data.' },
      { status: 500 }
    );
  }
}