import { Controller, Get, Body, Param, Post } from '@nestjs/common';
import { Module1Service } from './index.service';
import { AddUserDto } from './addUser.dto';

@Controller('/module1')
export class Module1Controller {
  constructor(private readonly module1Service: Module1Service) {}

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
}
