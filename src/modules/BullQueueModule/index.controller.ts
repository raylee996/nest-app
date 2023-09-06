import { BullQueueService } from './index.service';
import { Body, Controller, Inject, Post } from '@nestjs/common';

@Controller('bull')
export class BullQueueController {
  constructor(private readonly bullQueueService: BullQueueService) {}

  @Post('addQueue')
  async addQueue(@Body() payload: any) {
    const res = await this.bullQueueService.test(payload);
    return res;
  }
}
