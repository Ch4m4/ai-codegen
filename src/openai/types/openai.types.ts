import {
  CreateCompletionRequestPrompt,
  CreateCompletionResponse,
  OpenAIApi,
} from 'openai';

export interface IOpenAIService {
  getOpenAI(): OpenAIApi;
  createCompletion(
    prompt: CreateCompletionRequestPrompt,
  ): Promise<ICreateCompletionResponse>;
}

export interface ICreateCompletionResponse extends CreateCompletionResponse {
  prompt: CreateCompletionRequestPrompt;
}
