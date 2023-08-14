import { Module } from '@nestjs/common';
import { MRedisController } from './index.controller';

@Module({
  controllers: [MRedisController],
})
export class MRedisModule {}
