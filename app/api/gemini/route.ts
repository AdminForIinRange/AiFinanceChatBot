import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function POST(request: Request) {
  try {
    const { prompt: userPrompt, symbol } = await request.json();
    if (!userPrompt || !symbol) {
      return NextResponse.json(
        { error: "Missing prompt or symbol." },
        { status: 400 }
      );
    }

    const finnhubKey = process.env.FINNHUB_API_KEY!;
    const today = new Date();
    const prior = new Date();
    prior.setDate(today.getDate() - 7);
    const from = prior.toISOString().split("T")[0];
    const to = today.toISOString().split("T")[0];

    const [quoteRes, newsRes] = await Promise.all([
      fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${finnhubKey}`),
      fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${from}&to=${to}&token=${finnhubKey}`)
    ]);

    const [stock, news] = await Promise.all([
      quoteRes.json(),
      newsRes.json()
    ]);

    const summaryNews = news.slice(0, 3).map(n => `- ${n.headline}: ${n.summary}`).join('\n');

    const finalPrompt = `
You are a seasoned Wall Street investor. The user asked:
"${userPrompt}"

> Stock Ticker: ${symbol}
> Current Price: $${stock.c}
> High: $${stock.h}, Low: $${stock.l}, Open: $${stock.o}, Previous Close: $${stock.pc}

> Recent News:
${summaryNews}

Please keep your answer insightful and concise. Format each point as a blockquote (with '>'), and remind the user that this is not financial advice.
`;

    const config = {
      model: "gemini-2.0-flash",
      contents: finalPrompt,
      maxOutputTokens: 500,
      temperature: 0.5
    };

    const result = await ai.models.generateContent(config);
    return NextResponse.json({ response: result.text });

  } catch (error: any) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: "Internal error", details: error.message },
      { status: 500 }
    );
  }
}
