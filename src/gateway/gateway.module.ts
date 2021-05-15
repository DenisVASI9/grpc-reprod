import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { ClientGrpcProxy, ClientsModule } from '@nestjs/microservices';
import { resolve } from 'path';

class ErrorHandlingProxy extends ClientGrpcProxy {
  protected serializeResponse(response: any): any {
    console.log('RESPONSEEEEE');
    return super.serializeResponse(response);
  }

  protected serializeError(err: any): any {
    console.log('ERRORRRRRR');
    return super.serializeError(err);
  }
}

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'mservice',
        customClass: ErrorHandlingProxy,
        options: {
          url: 'localhost:50052',
          package: 'mservice',
          protoPath: resolve(__dirname, '../../mservice/mservice.proto'),
        },
      },
    ]),
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
