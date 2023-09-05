import { CVSModule } from './modules/CVSModule/index.module';
import { MRedisModule } from './modules/mRedisModule/index.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module1Module } from './modules/module1/index.module';
import { RedisModule } from './redis/index.module';
import { LoggerModule } from './logger/logger.module';
import { SubscribeModule } from './modules/SubscribeModule/index.module';
import { PublishModule } from './modules/PublishModule/index.module';
import { CacheModule } from '@nestjs/cache-manager';
import { MCacheModule } from './modules/MCacheModule/index.module';
import { CronModule } from './modules/CronModule/index.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'midway',
      username: 'root',
      password: '101liweifan',
      // entities: ['*.entity.ts'],
      autoLoadEntities: true,
    }),
    Module1Module,
    RedisModule,
    MRedisModule,
    LoggerModule,
    SubscribeModule,
    PublishModule,
    CVSModule,
    CacheModule.register({
      isGlobal: true,
      // imports: [MCacheModule],
    }),
    MCacheModule,
    ScheduleModule.forRoot(),
    CronModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  onApplicationShutdown(signal: string) {
    console.log(signal); // e.g. "SIGINT"
  }
}
