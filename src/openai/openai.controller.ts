import { Controller, Get, Post, Body } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import {
  CreateCompletionRequestDTO,
  CreateCompletionResponseDTO,
  CreateEditRequestDTO,
} from './types/openai.dto';

@Controller('openai')
export class OpenAIController {
  constructor(private openAIService: OpenAIService) {}

  @Get()
  getOpenAI() {
    return this.openAIService.getOpenAI();
  }

  @Post('completion')
  async createCompletion(
    @Body() body: CreateCompletionRequestDTO,
  ): Promise<CreateCompletionResponseDTO> {
    return await this.openAIService.createCompletion(body.prompt);
  }

  @Post('edit')
  async createEdit(@Body() body: CreateEditRequestDTO) {
    const { input, instruction } = body;

    return await this.openAIService.createEdit(input, instruction);
  }

  @Post('new-model')
  async createFineTune() {
    console.log('get new-model');
    return await this.openAIService.createFineTune();
  }
}
