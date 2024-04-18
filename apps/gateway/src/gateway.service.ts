import { Injectable } from '@nestjs/common';

@Injectable()
export class GatewayService {
  getHello(): string {
    return `Hello World gateway! running on ${process.env.PORT_GATEWAY_API}`;
  }

  checkHealth(): string {
    return JSON.stringify({ status: 'UP' });
  }
}
