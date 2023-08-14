import { RolesGuard } from './../../guards/role.guard';
import { JoiPipe } from './../../pipes/joi.pipe';
import { TransformPipe } from './../../pipes/transform.pipe';
import { TestPipe } from './../../pipes/test.pipe';
import { RedisKey } from 'ioredis';
import { RedisService } from './../../redis/index.service';
import {
  Controller,
  Get,
  Body,
  Param,
  Post,
  Query,
  ParseIntPipe,
  HttpStatus,
  ParseArrayPipe,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { Module1Service } from './index.service';
import { AddUserDto } from './addUser.dto';
import * as Joi from 'joi';
import { Role } from '../../decorators/role.decorator';
import { Compose } from '../../decorators/compose.decorator';
import { AuthBearer } from '../../decorators/createParam.decorator';

@Controller('/module1')
// @Compose(['admin', 'developer'])
export class Module1Controller {
  constructor(
    private readonly module1Service: Module1Service,
    private readonly redisService: RedisService,
  ) {}

  @Post('add')
  async add(@Body() payload: AddUserDto) {
    console.log('payload: ', payload);
    const res = await this.module1Service.add(payload);

    return res;
  }

  @Get('find')
  async find(@Param('id') id) {
    const res = await this.module1Service.find({
      id,
    });

    return res;
  }

  @Post('setCache')
  async setCache(@Body() payload: { key: RedisKey; value: unknown }) {
    await this.redisService.set(payload.key, payload.value);
    return 1;
  }

  @Get('getCache')
  async getCache(@Query('key') key) {
    const res = await this.redisService.get(key);

    return res;
  }

  @Get('validateInt')
  async validateInt(
    @Query('id', new TransformPipe())
    id,
  ) {
    return id;
  }

  @Post('validateArray')
  // @Role('admin', 'developer')
  @UseGuards(RolesGuard)
  // @UsePipes(JoiPipe)
  async validateArray(
    /* @Body(
      new ParseArrayPipe({
        items: AddUserDto,
      }),
    ) */
    /* @Body(
      new JoiPipe(
        Joi.object({
          username: Joi.string().required(),
          avatar: Joi.string(),
          role: Joi.string(),
        }),
      ),
      // TransformPipe,
    ) */
    @AuthBearer('user')
    payload: AddUserDto,
  ) {
    return payload;
  }
}
