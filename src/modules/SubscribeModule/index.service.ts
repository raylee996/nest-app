import { REDIS_SUBSCRIBER } from './../../redis/constants';
import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

const TASK_QUEUE = 'TASK_QUEUE';

@Injectable()
export class SubscribeService {
  onApplicationBootstrap() {
    this.subscriber.subscribe(TASK_QUEUE, (err, result) => {
      console.log(result);
    });
  }

  constructor(@Inject(REDIS_SUBSCRIBER) private readonly subscriber: Redis) {}
}
