import { GLOBAL_OPTIONS } from './contant';
import { Provider } from '@nestjs/common';

export const globalProviders: Provider[] = [
  {
    provide: GLOBAL_OPTIONS,
    useValue: {
      do() {
        console.log('__ob__xxx');
      },
    },
  },
];
