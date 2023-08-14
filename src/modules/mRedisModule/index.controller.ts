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
}
