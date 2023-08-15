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

  @Post('getTask')
  async getTask(@Body() payload: { source: RedisKey; destination: RedisKey }) {
    const res = await this.redisService.brpoplpush(
      payload.source,
      payload.destination,
    );
    return res;
  }

  @Post('pushTask')
  async pushTask(
    @Body() payload: { key: RedisKey; tasks: (string | number | Buffer)[] },
  ) {
    console.log(payload);

    const res = await this.redisService.lpush(payload.key, ...payload.tasks);
    return res;
  }

  @Post('addScore')
  async addScore(
    @Body()
    payload: {
      key: RedisKey;
      scoreMembers: (string | number | Buffer)[];
    },
  ) {
    console.log(payload);

    const res = await this.redisService.zadd(
      payload.key,
      ...payload.scoreMembers,
    );
    return res;
  }
}
