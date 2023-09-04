import { REDIS_PUBLISHER } from '../../redis/constants';
import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

const TASK_QUEUE = 'TASK_QUEUE';

@Injectable()
export class PublishService {
  constructor(@Inject(REDIS_PUBLISHER) private readonly publisher: Redis) {}

  // fabu
  async pushTask(task) {
    const serializalTask = JSON.stringify(task);

    const res = await this.publisher.publish(TASK_QUEUE, serializalTask);

    return res;
  }
}
