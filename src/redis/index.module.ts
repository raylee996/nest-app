import { RedisService } from './index.service';
import { Global, Module } from '@nestjs/common';
import { redisProvider } from './index.provider';
import customProviders from 'src/modules/CustomProvider/index.provider';

@Module({
  providers: [...redisProvider, RedisService, ...customProviders],
  exports: [...redisProvider, RedisService],
})
@Global()
export class RedisModule {}
