import { GlobalService } from './type';
import { GLOBAL_OPTIONS } from './contant';
import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class DynamicService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    @Inject(GLOBAL_OPTIONS) private readonly globalService: GlobalService,
  ) {}

  test() {
    console.log(this.request.headers);

    this.globalService.do();
  }
}
