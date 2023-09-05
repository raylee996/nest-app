import { REDIS_SUBSCRIBER } from '../../redis/constants';
import { Inject, Injectable } from '@nestjs/common';
import Redis, { RedisValue } from 'ioredis';

const STAR_SET = 'STAR_SET';

@Injectable()
export class SetService {
  constructor(@Inject(REDIS_SUBSCRIBER) private readonly redis: Redis) {}

  xadd(...args: RedisValue[]) {
    this.redis.xadd(STAR_SET, ...args);
  }
}
