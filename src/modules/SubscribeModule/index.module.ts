import { SubscribeService } from './index.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [SubscribeService],
  exports: [SubscribeService],
})
export class SubscribeModule {}
