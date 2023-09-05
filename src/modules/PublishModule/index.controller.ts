import { PublishService } from './index.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('publish')
export class PublishController {
  constructor(private readonly publishService: PublishService) {}

  @Post('pushTask')
  async pushTask(@Body() task: object) {
    const res = await this.publishService.pushTask(task);

    return res;
  }
}
