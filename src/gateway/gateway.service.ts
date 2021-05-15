import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  M_SERVICE_NAME,
  MSERVICE_PACKAGE_NAME,
  MServiceClient,
} from '../mservice/mservice';

@Injectable()
export class GatewayService implements OnModuleInit {
  constructor(
    @Inject(MSERVICE_PACKAGE_NAME) private readonly client: ClientGrpc,
  ) {}

  mserviceClient: MServiceClient;

  onModuleInit() {
    this.mserviceClient =
      this.client.getService<MServiceClient>(M_SERVICE_NAME);
  }

  sayHello() {
    return this.mserviceClient.sayHelloFromRpc({
      name: 'Denis',
    });
  }
}
