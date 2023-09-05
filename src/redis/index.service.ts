import { CustomService } from './../modules/CustomProvider/type';
import {
  CUSTOM_SERVICE,
  CUSTOM_CLASS_SERVICE,
  CustomClassService,
} from './../modules/CustomProvider/index.provider';
import { REDIS_SUBSCRIBER, REDIS_PUBLISHER } from './constants';
import { Inject, Injectable } from '@nestjs/common';
import Redis, { RedisKey } from 'ioredis';

@Injectable()
export class RedisService {
  constructor(
    @Inject(REDIS_SUBSCRIBER) private readonly subscriber: Redis,
    @Inject(REDIS_PUBLISHER) private readonly publisher: Redis,
    @Inject(CUSTOM_SERVICE) private readonly customService: CustomService,
    @Inject(CUSTOM_CLASS_SERVICE)
    private readonly customClassService: CustomClassService,
  ) {}

  public async set(key: RedisKey, value: unknown) {
    const res = await this.publisher.set(key, JSON.stringify(value));
    return res;
  }

  public async setnx(key: RedisKey, id: string | number) {
    const res = await this.publisher.setnx(key, id);
    return res;
  }

  public async del(key: RedisKey) {
    const res = await this.publisher.del(key);
    return res;
  }

  public async get<T = any>(key: RedisKey) {
    const res = await this.publisher.get(key);

    try {
      const ret = JSON.parse(res);
      return ret;
    } catch {
      return res;
    }
  }

  // 任务进入队列
  public async lpush(key: RedisKey, ...elements: (string | number | Buffer)[]) {
    const res = await this.publisher.lpush(key, ...elements);
    return res;
  }

  // 用于从备份队列取任务
  public async rpop(key: RedisKey) {
    const res = await this.publisher.rpop(key);
    return res;
  }

  // 从主队列取任务
  public async brpoplpush(source: RedisKey, destination: RedisKey) {
    const res = await this.publisher.brpoplpush(
      source,
      destination,
      24 * 60 * 60 * 1000,
    );
    return res;
  }

  public async testCustomService() {
    this.customService.do();
  }

  public async testClassService() {
    this.customClassService.test();
  }

  /* zset手机号排序 */
  // 插入zset
  public async zadd(
    key: RedisKey,
    ...scoreMembers: (string | number | Buffer)[]
  ) {
    const res = await this.publisher.zadd(key, ...scoreMembers);
    return res;
  }

  // zset排序
  public async zrangebylex(key: RedisKey) {
    const res = await this.publisher.zrangebylex(key, '-', '+');
    return res;
  }
}
