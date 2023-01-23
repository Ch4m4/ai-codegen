import {
  ConfigurationParameters,
  CreateCompletionRequest,
  CreateFineTuneRequest,
} from 'openai';

export interface IConfigsService {
  config: IConfig;
}

export interface IConfig {
  port: number;
  isDev: boolean;
  openAI: IConfigOpenAI;
}

export interface IConfigOpenAI {
  configuration: ConfigurationParameters;
  fineTune: CreateFineTuneRequest;
  completion: CreateCompletionRequest;
  editModel: string;
}
