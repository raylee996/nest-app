import { Controller, Get, Version } from '@nestjs/common';

@Controller('cvs')
export class CvsController {
  @Get('test')
  @Version('1')
  async test1() {
    console.log('test v1');
  }

  @Get('test')
  @Version('2')
  async test2() {
    console.log('test v2');
  }
}
