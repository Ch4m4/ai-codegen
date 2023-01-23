import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.use(urlencoded({ extended: false }));
  app.use(json());

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
