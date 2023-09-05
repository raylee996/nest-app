import { PublishService } from './index.service';
import { Module } from '@nestjs/common';
import { PublishController } from './index.controller';

@Module({
  providers: [PublishService],
  controllers: [PublishController],
  exports: [PublishService],
})
export class PublishModule {}
