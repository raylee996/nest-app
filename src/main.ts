import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
  setTimeout(() => {
    app.close();
  }, 10000);
}
bootstrap();
