import { Controller, Get } from '@nestjs/common';
import { OpenAIService } from './openai.service';

@Controller('openai')
export class OpenAIController {
  constructor(private openAIService: OpenAIService) {}

  @Get()
  getOpenAI() {
    return this.openAIService.getOpenAI;
  }

  @Get('create')
  async create() {
    return this.openAIService.createFineTune();
  }
}
