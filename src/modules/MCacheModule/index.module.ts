import { Module } from '@nestjs/common';
import { MCacheController } from './index.controller';

@Module({
  controllers: [MCacheController],
})
export class MCacheModule {}
