import { Module } from '@nestjs/common';
import { ConfigsModule } from '../configs/configs.module';
import { OpenAIController } from './openai.controller';

@Module({
  imports: [ConfigsModule],
  controllers: [OpenAIController],
})
export class OpenaiModule {}
