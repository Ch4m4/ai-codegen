import {
  Configuration,
  CreateCompletionRequestPrompt,
  CreateEditRequest,
  CreateEditResponse,
  OpenAIApi,
} from 'openai';
import { ConfigsService } from '../configs/configs.service';
import { Injectable } from '@nestjs/common';
import {
  ICreateCompletionResponse,
  IOpenAIService,
} from './types/openai.types';
import { IConfig } from '../configs/types/configs.types';

@Injectable()
export class OpenAIService implements IOpenAIService {
  private readonly config: IConfig;
  private readonly openAI: OpenAIApi;
  private readonly openAIConfig: Configuration;

  constructor(private configService: ConfigsService) {
    this.config = configService.config;
    this.openAIConfig = new Configuration(this.config.openAI.configuration);
    this.openAI = new OpenAIApi(this.openAIConfig);
  }

  getOpenAI() {
    return this.openAI;
  }

  async createCompletion(
    prompt: CreateCompletionRequestPrompt,
  ): Promise<ICreateCompletionResponse> {
    const { data } = await this.openAI.createCompletion({
      prompt,
      ...this.config.openAI.completion,
    });

    return { prompt, ...data };
  }

  createFineTune() {
    return this.openAI.createFineTune(this.config.openAI.fineTune);
  }

  async createEdit(
    input: string,
    instruction: string,
  ): Promise<CreateEditResponse> {
    const { data } = await this.openAI.createEdit({
      input,
      instruction,
      model: this.config.openAI.editModel,
    });

    return data;
  }
}
