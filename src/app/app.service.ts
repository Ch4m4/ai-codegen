import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';

interface IAppService {
  getHello: () => string;
}

@Injectable()
export class AppService implements IAppService {
  constructor(private readonly openAI: OpenAIService) {}

  getHello() {
    return 'Hello World!';
  }

  async getCompletion(prompt: string) {
    const userPrompt = 'write array sort function ts';

    const result = await this.openAI.createCompletion(userPrompt);
  }
}
