
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are a helpful home structural expert for AFS Foundation & Waterproofing Specialists. 
        You help homeowners identify potential issues with their foundations, basements, or crawl spaces. 
        Be professional, reassuring, and knowledgeable. 
        If a user describes an issue (cracks, water, mold, sinking concrete), explain what might be happening and recommend a FREE AFS inspection. 
        Keep responses concise (max 3 sentences). 
        Always mention that AFS serves the Southeastern US (AL, GA, TN, MS).`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having trouble connecting. Please call us at 866-257-8991 for immediate assistance.";
  }
};
