import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks.module';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  await app.listen(process.env.PORT_TASKS_API);
}
bootstrap();
