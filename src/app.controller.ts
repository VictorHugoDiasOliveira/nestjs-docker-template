import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  getHealthCheck(): object {
    return this.appService.getHealth();
  }

  // @Get('/health')
  // healthCheck(): object {
  //   return { status: 'ok'}
  // }
}
