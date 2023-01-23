import { IConfigOpenAI } from '../types/configs.types';

export const getOpenAIConfig = (): IConfigOpenAI => {
  return {
    editModel: 'text-davinci-edit-001',
    configuration: {
      apiKey: process.env.OPENAI_API_KEY,
    },
    fineTune: {
      training_file: process.env.OPENAI_TRAINING_FILE,
    },
    completion: {
      model: 'code-davinci-002',
      max_tokens: 256,
      temperature: 0.1,
    },
  };
};
