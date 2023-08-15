import { DynamicModule } from './../DynamicModule/index.module';
import { RedisModule } from './../../redis/index.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module1Entity } from './index.entity';
import { Module1Service } from './index.service';
import { Module1Controller } from './index.controller';

@Module({
  imports: [
    /* RedisModule,  */ TypeOrmModule.forFeature([Module1Entity]),
    DynamicModule.register(false),
  ],
  providers: [Module1Service],
  controllers: [Module1Controller],
})
export class Module1Module {}
