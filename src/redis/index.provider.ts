import { Provider } from '@nestjs/common';
import IORedis, { Redis } from 'ioredis';
import config from 'config';

const redisConfig = config.get<IRedisSetting>('REDIS_SETTINGS');

export const redisProvider: Provider[] = [
  {
    provide: 'REDIS_CLIENT',
    useFactory: (): Redis => {
      return new IORedis({
        host: redisConfig.host,
        port: redisConfig.port,
        // password: redisConfig.password,
      });
    },
  },
  {
    provide: 'REDIS_SETTINGS',
    useFactory: (): Redis => {
      return new IORedis({
        host: redisConfig.host,
        port: redisConfig.port,
        // password: redisConfig.password,
      });
    },
  },
];
