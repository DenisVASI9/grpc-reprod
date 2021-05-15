import { Injectable } from '@nestjs/common';
import { Message, Name } from './mservice';

@Injectable()
export class MserviceService {
  async sayHello(params: Name): Promise<Message> {
    return {
      message: `Привет, ${params.name}`,
    };
  }
}
