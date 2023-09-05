import { Inject, Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { REDIS_PUBLISHER } from 'src/redis/constants';

/* 
  lpush 队列
  消息生成唯一id
  brpoplpush =》备份队列
*/

@Injectable()
export class ListQueueService {
  constructor(@Inject(REDIS_PUBLISHER) publisher: Redis) {}

  //
}
