import { RedisKey } from 'ioredis';
import { RedisService } from './../../redis/index.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('redis')
export class MRedisController {
  constructor(private readonly redisService: RedisService) {}

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
