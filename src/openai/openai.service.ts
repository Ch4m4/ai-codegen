import { Configuration, OpenAIApi } from 'openai';
import { ConfigsService } from '../configs/configs.service';
import { Injectable } from '@nestjs/common';

interface IOpenAIService {
  createFineTune(): void;
}

@Injectable()
export class OpenAIService implements IOpenAIService {
  private readonly config;
  private readonly openAI: OpenAIApi;

  constructor(private configService: ConfigsService) {
    this.config = configService.devConfig.openAI;
    this.openAI = new OpenAIApi(new Configuration(this.config.configuration));
  }

  get getOpenAI() {
    return this.openAI;
  }

  async createFineTune() {
    return this.openAI.createFineTune(this.config.fineTune);
  }
}
