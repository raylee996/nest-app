import { Module } from '@nestjs/common';
import { redisProvider } from './index.provider';

@Module({
  providers: [...redisProvider],
  exports: [],
})
export class RedisModule {}
