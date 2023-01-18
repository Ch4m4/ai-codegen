import { Module } from '@nestjs/common';
import { ConfigsModule } from '../configs/configs.module';
import { OpenaiController } from './openai.controller';

@Module({
  imports: [ConfigsModule],
  controllers: [OpenaiController],
})
export class OpenaiModule {}
