/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Observable } from 'rxjs';

export const protobufPackage = 'mservice';

export interface Name {
  name: string;
}

export interface Message {
  message: string;
}

export const MSERVICE_PACKAGE_NAME = 'mservice';

export interface MServiceClient {
  sayHelloFromRpc(request: Name): Observable<Message>;
}

export interface MServiceController {
  sayHelloFromRpc(
    request: Name,
  ): Promise<Message> | Observable<Message> | Message;
}

export function MServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['sayHelloFromRpc'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('MService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('MService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const M_SERVICE_NAME = 'MService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
