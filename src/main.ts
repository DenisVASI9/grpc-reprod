import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  GrpcOptions,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';
import { resolve } from 'path';

export const MserviceClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50052',
    package: 'mservice',
    protoPath: resolve(__dirname, '../../src/mservice/mservice.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.connectMicroservice<MicroserviceOptions>(MserviceClientOptions);

  await app.startAllMicroservicesAsync();

  await app.listen(5000);
}

bootstrap();
