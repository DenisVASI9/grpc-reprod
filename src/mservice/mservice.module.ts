import { Module } from '@nestjs/common';
import { MserviceController } from './mservice.controller';
import { MserviceService } from './mservice.service';

@Module({
  imports: [],
  controllers: [MserviceController],
  providers: [MserviceService],
})
export class MserviceModule {}
