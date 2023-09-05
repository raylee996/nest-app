import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Controller, Inject, Post, Body, Get, Param } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Controller('cache')
export class MCacheController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Post('addCache')
  async addCache(@Body() cacheObj: any) {
    await this.cacheManager.set(cacheObj.key, cacheObj.value, 20);
    return 'done';
  }

  @Get('getCache')
  async getCache(@Param() key: string) {
    const val = await this.cacheManager.get(key);
    console.log(2);

    return val;
  }
}
