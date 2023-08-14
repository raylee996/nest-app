import { REDIS_SUBSCRIBER, REDIS_PUBLISHER } from './constants';
import { Inject, Injectable } from '@nestjs/common';
import Redis, { RedisKey } from 'ioredis';

@Injectable()
export class RedisService {
  constructor(
    @Inject(REDIS_SUBSCRIBER) private readonly subscriber: Redis,
    @Inject(REDIS_PUBLISHER) private readonly publisher: Redis,
  ) {}

  public async set(key: RedisKey, value: unknown) {
    await this.publisher.set(key, JSON.stringify(value));
  }

  public async setNx(key: RedisKey, value: string | number | Buffer) {
    await this.publisher.setnx(key, value);
  }

  public async get<T = any>(key: RedisKey) {
    console.log('key: ', key);
    const res = await this.publisher.get(key);
    console.log('res: ', res);

    try {
      const ret = JSON.parse(res);
      return ret;
    } catch {
      return res;
    }
  }
}
