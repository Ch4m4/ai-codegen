import { Module } from '@nestjs/common';
import { ConfigsService } from './configs.service';

@Module({
  providers: [
    {
      provide: ConfigsService,
      useValue: new ConfigsService(),
    },
  ],
  exports: [ConfigsService],
})
export class ConfigsModule {}
