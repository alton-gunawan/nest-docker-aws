import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World nest-docker-aws! running on ${process.env.PORT_MAIN_SERVICE_API}`;
  }
}
