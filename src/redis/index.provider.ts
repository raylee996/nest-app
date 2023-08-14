import { Provider } from '@nestjs/common';
import IORedis, { Redis } from 'ioredis';
import { REDIS_PUBLISHER, REDIS_SUBSCRIBER } from './constants';

export const redisProvider: Provider[] = [
  {
    provide: REDIS_SUBSCRIBER,
    useFactory: (): Redis => {
      return new IORedis({
        host: '116.205.134.191',
        port: 6379,
        // password: '101liweifan',
      });
    },
  },
  {
    provide: REDIS_PUBLISHER,
    useFactory: (): Redis => {
      return new IORedis({
        host: '116.205.134.191',
        port: 6379,
        // password: '101liweifan',
      });
    },
  },
];
