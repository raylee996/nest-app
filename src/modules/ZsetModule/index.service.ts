import { REDIS_SUBSCRIBER } from './../../redis/constants';
import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

const PHONENUMBERS = 'PHONENUMBERS';

@Injectable()
export class ZsetService {
  constructor(@Inject(REDIS_SUBSCRIBER) private readonly redis: Redis) {}

  zdd(...scoreMembers: (string | Buffer | number)[]) {
    this.redis.zadd(PHONENUMBERS, ...scoreMembers);
  }
}
