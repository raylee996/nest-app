import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module1Module } from './modules/module1/index.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'test',
      username: 'root',
      password: '101liweifan',
      entities: ['*.entity.ts'],
    }),
    Module1Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
