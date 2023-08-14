import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class TestPipe implements PipeTransform {
  options = [];

  constructor(options) {
    this.options = options;
  }

  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value: ', value);
    console.log('metadata: ', metadata);

    return value;
  }
}
