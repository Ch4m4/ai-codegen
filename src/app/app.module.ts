import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsService } from '../configs/configs.service';
import { OpenAIController } from '../openai/openai.controller';
import { OpenAIService } from '../openai/openai.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.production.env'],
    }),
  ],
  controllers: [AppController, OpenAIController],
  providers: [AppService, ConfigsService, OpenAIService],
})
export class AppModule {}
