import { DynamicService } from './index.service';
import { GLOBAL_OPTIONS } from './contant';
import { Module } from '@nestjs/common';

@Module({})
export class DynamicModule {
  static register(useGlobal: boolean) {
    return {
      module: DynamicModule,
      providers: [
        {
          provide: GLOBAL_OPTIONS,
          useValue: useGlobal
            ? {
                do() {
                  console.log('__ob__xxx');
                },
              }
            : null,
        },
        DynamicService,
      ],
      exports: [DynamicService],
    };
  }
}
