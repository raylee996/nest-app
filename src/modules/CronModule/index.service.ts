import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Injectable, Inject } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';
import { Cache } from 'cache-manager';
import * as config from 'config';

@Injectable()
export class CronService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    const val = await this.cacheManager.get('key');
    if (val) {
      console.log(val);
    } else {
      await this.cacheManager.set('key', 'hahaha', 100);
    }
  }

  @Interval(10000)
  async handleInterval() {
    const val = await this.cacheManager.get('key2');
    console.log(config.get('REDIS_SETTINGS'));

    if (val) {
      console.log(val);
    } else {
      await this.cacheManager.set('key2', 'handleInterval', 100);
    }
  }
}
