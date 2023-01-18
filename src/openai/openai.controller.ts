import { Controller, Get } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private openaiService: OpenaiService) {}

  @Get()
  getOpenAI() {
    return this.openaiService.getOpenAI;
  }

  @Get('create')
  async create() {
    return this.openaiService.createFineTune();
  }
}
