import { DynamicService } from './../DynamicModule/index.service';
import { RedisKey } from 'ioredis';
import { RedisService } from './../../redis/index.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('redis')
export class MRedisController {
  constructor(
    private readonly redisService: RedisService,
    private readonly dynamicService: DynamicService,
  ) {}

  @Post('setLock')
  async setLock(@Body() payload: { key: RedisKey; id: string | number }) {
    const res = await this.redisService.setnx(payload.key, payload.id);
    return res;
  }

  @Post('delLock')
  async delLock(@Body() payload: { key: RedisKey; lockId: string | number }) {
    const id = await this.redisService.get(payload.key);
    console.log('id: ', id);
    if (id && id == payload.lockId) {
      const res = await this.redisService.del(payload.key);
      return res;
    }
    return 'null';
  }

  @Get('test')
  async test() {
    this.redisService.testCustomService();
    this.redisService.testClassService();
    return 111;
  }

  @Get('testDynamice')
  async testDynamice() {
    this.dynamicService.test();
    return 111;
  }
}
