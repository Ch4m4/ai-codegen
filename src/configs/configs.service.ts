import { Injectable } from '@nestjs/common';
import { ConfigurationParameters, CreateFineTuneRequest } from 'openai';

export interface IConfig {
  port: number;
  isDev: boolean;
  openai: {
    configuration: ConfigurationParameters;
    fineTune: CreateFineTuneRequest;
  };
}

export type IDevConfig = IConfig;

@Injectable()
export class ConfigsService {
  readonly devConfig: IDevConfig;

  constructor() {
    this.devConfig = {
      port: parseInt(process.env.PORT) || 3000,
      isDev: process.env.MODE === 'development',
      openai: {
        configuration: {
          apiKey: process.env.OPENAI_API_KEY,
        },
        fineTune: {
          training_file: process.env.OPENAI_TRAINING_FILE,
        },
      },
    };
  }
}
