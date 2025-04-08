import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Create an instance of the Gemini SDK using the API key from your environment
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function POST(request: Request) {
  try {
    // Parse JSON from the client (expecting a "prompt")
    const { prompt: userPrompt } = await request.json();
    if (!userPrompt) {
      return NextResponse.json(
        { error: "Missing prompt parameter." },
        { status: 400 }
      );
    }

    let finalPrompt = userPrompt;
    const financialKeywords = ["stock", "finance", "financial", "investment", "ticker", "share", "market", "economy"]; // Add more keywords as needed

    const isFinancialQuery = financialKeywords.some(keyword =>
      userPrompt.toLowerCase().includes(keyword)
    );
    


    
    if (isFinancialQuery) {
      finalPrompt = `You are acting as a seasoned Wall Street investor. The user is asking: "${userPrompt}". Please provide an insightful and analytical response, considering potential risks and opportunities. **Format your response using paragraphs and enclose each distinct segment of information within a blockquote (using the '>' symbol).** Remember to state clearly that this is not financial advice.`;
    }

    const config = {
      model: "gemini-2.0-flash", // Choose a different model if desired
      contents: finalPrompt,
      // Adjust parameters as needed
      maxOutputTokens: 500,
      temperature: 0.3, // Slightly higher temperature for more creative/insightful responses
      // You can also specify a custom promptFormat
      promptFormat: {
        type: "text",
        // Add your desired custom prompt fields here
        fields: {
          tone: "analytical",
          format: "text",
          // Add more fields to customize the AI's behavior
          language: "en-US",
          domain: "finance",
          task: "analyze and generate", // Changed task to reflect more analytical behavior
          style: "insightful", // Changed style to reflect a Wall Street investor's perspective
          audience: "investors",
          persona: "experienced_financial_analyst", // More specific persona
        },
      },
    };

    // Call Gemini API using generateContent with the customized config
    const result = await ai.models.generateContent(config);

    // Log or modify result as needed; we return the generated text.
    return NextResponse.json({ response: result.text });
  } catch (error: any) {
    console.error("Error in api/gemini route:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}