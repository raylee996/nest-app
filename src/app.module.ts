import { MRedisModule } from './modules/mRedisModule/index.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module1Module } from './modules/module1/index.module';
import { RedisModule } from './redis/index.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
