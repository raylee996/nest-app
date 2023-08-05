import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Module1Entity } from './index.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Module1Service {
  constructor(
    @InjectRepository(Module1Entity)
    private module1Repository: Repository<Module1Entity>,
  ) {
    //
  }

  async add(payload) {
    const res = await this.module1Repository.save(payload);

    return res;
  }

  async find(params) {
    const res = await this.module1Repository.findBy(params);

    return res;
  }
}
