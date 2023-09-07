import { OnQueueActive, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('queue1')
export class BullConsumer {
  @OnQueueActive()
  onActive(job: Job) {
    console.log(job.data);
  }
}
