import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateway/gateway.module';
import { MserviceModule } from './mservice/mservice.module';

@Module({
  imports: [GatewayModule, MserviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
