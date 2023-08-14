import {
  Controller,
  Get,
  Body,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { Module1Service } from './index.service';
import { AddUserDto } from './addUser.dto';
import { TimeoutInterceptor } from '../../interceptors/timeout.interceptor';

function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 5000);
  });
}

@Controller('/module1')
@UseInterceptors(new TimeoutInterceptor())
export class Module1Controller {
  constructor(private readonly module1Service: Module1Service) {}

  @Post('add')
  async add(@Body() payload: AddUserDto) {
    await sleep();
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
}
