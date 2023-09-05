import { REDIS_PUBLISHER } from './../../redis/constants';
import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class HashService {
  constructor(@Inject(REDIS_PUBLISHER) private readonly redis: Redis) {}

  hset() {
    this.redis.hset;
  }
}
