import { Provider } from '@nestjs/common';

const CustomService = {
  do: () => {
    console.log('doing');
  },
};

export class CustomClassService {
  public test() {
    console.log('test CustomClassService');
  }
}

export const CUSTOM_SERVICE = 'CUSTOM_SERVICE';

export const CUSTOM_CLASS_SERVICE = 'CUSTOM_CLASS_SERVICE';

export const CUSTOM_FACTORY_SERVICE = 'CUSTOM_FACTORY_SERVICE';

const customProviders: Provider[] = [
  {
    provide: CUSTOM_SERVICE,
    useValue: CustomService,
  },
  {
    provide: CUSTOM_CLASS_SERVICE,
    useClass: CustomClassService,
  },
];

export default customProviders;
