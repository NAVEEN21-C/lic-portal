
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "LIC Smart Lead Discovery Assistant" representing T. Suresh, a veteran LIC Advisor (Contact: 9908968539, Agent Code: 1109 73J).
Your primary goal is to actively discover and present the "Best Policy Leads" based on current market trends and LIC updates.

Operating Principles:
1. PROACTIVE LEAD GENERATION: Use Google Search to find "best LIC plans 2024-2025", "top rated LIC endowment plans".
2. MARKET TREND ANALYSIS: Scrape latest financial news to identify which policies offer best tax benefits (Section 80C).
3. THE "T. SURESH" CALL-TO-ACTION: End every response by reminding the user that T. Suresh (9908968539) provides personalized illustrations.

Keep the tone expert, trustworthy, and traditional yet modern.
`;

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface ExpertResponse {
  text: string;
  sources: GroundingSource[];
}

export async function askExpert(prompt: string): Promise<ExpertResponse> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.6,
      tools: [{ googleSearch: {} }],
    }
  });

  const text = response.text || "I'm sorry, I'm currently unable to retrieve the latest leads. Please contact T. Suresh at 9908968539.";
  const sources: GroundingSource[] = [];

  const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
  const chunks = groundingMetadata?.groundingChunks;
  
  if (chunks) {
    chunks.forEach((chunk: any) => {
      if (chunk.web && chunk.web.uri) {
        sources.push({
          title: chunk.web.title || "Market Analysis Source",
          uri: chunk.web.uri
        });
      }
    });
  }

  const uniqueSources = sources.filter((v, i, a) => a.findIndex(t => (t.uri === v.uri)) === i);

  return { text, sources: uniqueSources };
}

/**
 * Generates a professional hero image matching the provided business card reference.
 */
export async function generateAgentHeroImage(): Promise<string | null> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // Refined prompt to match the person in the photo: Indian male, glasses, mid-40s, formal white shirt.
    const prompt = "A high-quality professional studio portrait of an Indian male LIC insurance agent in his mid-40s, wearing rectangular glasses and a clean white formal button-down shirt. He has a warm, confident smile and short dark hair. The background is a clean, modern corporate office with soft natural lighting. Photorealistic, 8k resolution, cinematic look.";
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating agent image:", error);
    return null;
  }
}
