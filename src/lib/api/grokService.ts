import { askGrok } from './grokClient';
import { createAPIError } from '../utils/errorHandling';
import type { AnalysisResult } from '../types/api';

export async function analyzeText(text: string): Promise<AnalysisResult> {
  try {
    const prompt = `Analyze this text and provide sentiment, keywords, and language: "${text}"`;
    const response = await askGrok(prompt);
    return parseAnalysisResponse(response.choices[0].message.content);
  } catch (error) {
    const apiError = createAPIError(error);
    return { error: apiError.message };
  }
}

export async function analyzeImage(url: string): Promise<string> {
  try {
    const prompt = `Analyze this image at ${url}. Describe what you see, including objects, colors, and scene.`;
    const response = await askGrok(prompt);
    return response.choices[0].message.content;
  } catch (error) {
    throw createAPIError(error);
  }
}

export async function parseLogs(logs: string): Promise<string> {
  try {
    const prompt = `Parse and analyze these logs, identify important patterns and issues:\n${logs}`;
    const response = await askGrok(prompt);
    return response.choices[0].message.content;
  } catch (error) {
    throw createAPIError(error);
  }
}

export async function chatCompletion(message: string): Promise<string> {
  try {
    const response = await askGrok(message);
    return response.choices[0].message.content;
  } catch (error) {
    throw createAPIError(error);
  }
}

function parseAnalysisResponse(content: string): AnalysisResult {
  try {
    return {
      sentiment: content.match(/sentiment[:\s]+([^\n.,]+)/i)?.[1] || 'Unknown',
      keywords: content.match(/keywords?[:\s]+([^\n.]+)/i)?.[1]?.split(',').map(k => k.trim()) || [],
      language: content.match(/language[:\s]+([^\n.,]+)/i)?.[1] || 'Unknown'
    };
  } catch (error) {
    return { error: 'Failed to parse analysis response' };
  }
}