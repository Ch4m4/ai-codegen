import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigsService } from '../configs/configs.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigsService,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
