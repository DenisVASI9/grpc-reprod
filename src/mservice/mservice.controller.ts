import { Controller } from '@nestjs/common';
import {
  Message,
  MServiceController,
  MServiceControllerMethods,
  Name,
} from './mservice';
import { MserviceService } from './mservice.service';
import { RpcException } from '@nestjs/microservices';
import * as grpc from 'grpc';

@Controller()
@MServiceControllerMethods()
export class MserviceController implements MServiceController {
  constructor(private readonly mServiceService: MserviceService) {}

  sayHelloFromRpc(request: Name): Promise<Message> {
    throw new RpcException({
      code: grpc.status.NOT_FOUND,
      message: 'test throw',
    });
    return this.mServiceService.sayHello(request);
  }
}
