import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsService } from '../configs/configs.service';
import { OpenaiController } from '../openai/openai.controller';
import { OpenaiService } from '../openai/openai.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.production.env'],
    }),
  ],
  controllers: [AppController, OpenaiController],
  providers: [AppService, ConfigsService, OpenaiService],
})
export class AppModule {}
