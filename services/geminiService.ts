
import { GoogleGenAI } from "@google/genai";

const systemPrompt = `
You are an AI assistant for "INVRON LABS", a company that provides a communication platform to schools.
Your role is to help school administrators draft announcements for parents.
You will be given a simple note. Your task is to convert it into a professional, warm, and clear announcement.

Guidelines:
1.  **Start with a clear, friendly greeting:** "Dear Parents,"
2.  **Clearly state the main point:** What is happening? When? Where?
3.  **Include all details from the note:** If the note mentions "bring water," you must include "Please have your child bring a water bottle."
4.  **Add a warm closing:** "We look forward to seeing your child there!" or "Thank you for your cooperation."
5.  **Sign off:** "Best regards, [School Administration]"
6.  **Formatting:** Use short paragraphs and line breaks for readability. Do NOT use markdown (like * or #).
`;

export const generateAnnouncement = async (userQuery: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    const text = response.text;
    if (text) {
      return text;
    } else {
      throw new Error("No text content in API response.");
    }
  } catch (error) {
    console.error("Error generating content:", error);
    if (error instanceof Error) {
      throw new Error(`An error occurred: ${error.message}. Please check your API key and network connection.`);
    }
    throw new Error("An unknown error occurred while generating the announcement.");
  }
};
