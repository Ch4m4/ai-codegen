import { Injectable } from '@nestjs/common';
import { IConfig, IConfigsService } from './types/configs.types';
import { getOpenAIConfig } from './openai/openai.config';

@Injectable()
export class ConfigsService implements IConfigsService {
  get config() {
    return {
      port: parseInt(process.env.PORT) || 3000,
      isDev: process.env.MODE === 'development',
      openAI: getOpenAIConfig(),
    };
  }
}
