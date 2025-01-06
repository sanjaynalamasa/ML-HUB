export interface GrokResponse {
  id: string;
  choices: Array<{
    message: {
      content: string;
      role: string;
    };
    finish_reason: string;
    index: number;
  }>;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface AnalysisResult {
  sentiment?: string;
  keywords?: string[];
  language?: string;
  wordCount?: number;
  error?: string;
}

export interface APIError {
  message: string;
  code?: string;
}