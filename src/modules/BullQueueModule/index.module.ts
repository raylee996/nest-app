import { BullConsumer } from './consumer.service';
import { BullQueueService } from './index.service';
import { BullQueueController } from './index.controller';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BullModule.registerQueue({
      configKey: 'alternative-config',
      name: 'queue1',
    }),
  ],
  controllers: [BullQueueController],
  providers: [BullQueueService, BullConsumer],
  exports: [BullQueueService],
})
export class BullQueueModule {}
