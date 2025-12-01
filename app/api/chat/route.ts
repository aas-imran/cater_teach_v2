import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are 'CaterBot', the expert AI event consultant for CaterTech. 
CaterTech provides: 
1. Food Catering Services (Cooking arrangements, delicious food for events).
2. Event/Parties Management (Organizing complete events down to details).
3. Corporate Events (Turnkey services for business objectives).
4. Services Crew Supply (Professional staff staffing).
5. Seminar Arrangements (Conferences in hotels).
6. Furniture Equipment Rental (Event furniture).
7. Kitchen Equipment Rental (Indoor/outdoor cooking gear).
8. Catering Equipment Rental.

Your goal is to help customers plan their event and recommend specific CaterTech services based on their input.
Keep responses concise, professional, and warm. 
If the user asks for a quote, ask for details like guest count, date, and location, then say a human agent will contact them.
Do not make up prices.
`;

export async function POST(req: NextRequest) {
  try {
    const { history, newMessage } = await req.json();

    const apiKey = process.env.API_KEY || process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key missing on server" },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: { systemInstruction: SYSTEM_INSTRUCTION },
      history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({
      message: newMessage,
    });

    return NextResponse.json({ text: response.text ?? "" });
  } catch (error) {
    console.error("/api/chat error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}