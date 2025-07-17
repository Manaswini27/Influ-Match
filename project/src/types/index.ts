export interface FlaskRequest {
  content: string;
  brand: string;
}

export interface FlaskResponse {
  tone: string;
  sentiment: string;
  brand_fit_score: number;
  similarity: number;
}