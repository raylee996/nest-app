import { Module } from '@nestjs/common';
import { CronService } from './index.service';

@Module({
  providers: [CronService],
  exports: [CronService],
})
export class CronModule {}
