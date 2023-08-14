import {
  ArgumentMetadata,
  PipeTransform,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('validation');
    }
    console.log(value);

    return value;
  }
}
