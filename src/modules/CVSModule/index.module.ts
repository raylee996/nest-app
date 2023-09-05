import { Module } from '@nestjs/common';
import { CvsController } from './index.controller';

@Module({
  controllers: [CvsController],
})
export class CVSModule {}
