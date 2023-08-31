import { LoggerService } from './../../logger/logger.service';
import { DynamicModule } from './../DynamicModule/index.module';
import { Module } from '@nestjs/common';
import { MRedisController } from './index.controller';

@Module({
  imports: [DynamicModule.register(true)],
  providers: [LoggerService],
  controllers: [MRedisController],
})
export class MRedisModule {}
