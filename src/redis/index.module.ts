import { RedisService } from './index.service';
import { Global, Module } from '@nestjs/common';
import { redisProvider } from './index.provider';

@Module({
  providers: [...redisProvider, RedisService],
  exports: [...redisProvider, RedisService],
})
@Global()
export class RedisModule {}
