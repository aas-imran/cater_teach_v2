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

export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "I'm sorry, I'm currently offline (API Key missing). Please contact us directly via phone.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // We use a stateless approach for this simple widget, but formatted as chat history for context
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({
        message: newMessage
    });

    return response.text || "I apologize, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};