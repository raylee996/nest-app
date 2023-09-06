import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class BullQueueService {
  constructor(@InjectQueue('queue1') private queue1: Queue) {}

  async test(payload) {
    const res = await this.queue1.add(payload);
    return res;
  }
}
