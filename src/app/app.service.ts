import { Injectable } from '@nestjs/common';

interface IAppService {
  getHello: () => string;
}

@Injectable()
export class AppService implements IAppService {
  getHello() {
    return 'Hello World!';
  }
}
