import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Create an instance of the Gemini SDK using the API key from your environment
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function POST(request: Request) {
  try {
    // Parse JSON from the client (expecting a "prompt")
    const { prompt } = await request.json();
    if (!prompt) {
      return NextResponse.json(
        { error: "Missing prompt parameter." },
        { status: 400 }
      );
    }

    // Call Gemini API using generateContent with the desired model and options.
    // You can customize config parameters (e.g., maxOutputTokens, temperature) as required.
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      // For text-only inputs, you can pass the prompt as a string.
      contents: prompt,
      config: {
        maxOutputTokens: 500,
        temperature: 0.1,
      },
    });

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
