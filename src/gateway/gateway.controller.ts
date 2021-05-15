import { Controller, Get } from '@nestjs/common';
import { GatewayService } from './gateway.service';

@Controller('api/gateway')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Get('hello')
  async hello() {
    return this.gatewayService.sayHello();
  }
}
