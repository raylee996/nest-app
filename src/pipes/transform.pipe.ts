import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class TransformPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value: ', value);
    try {
      const res = parseInt(value, 10);
      return res;
    } catch (err) {
      throw new BadRequestException('parse error');
    }
  }
}
