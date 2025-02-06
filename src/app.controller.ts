import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { GoogleAuthGuard } from './google-auth.guard';
import { MicrosoftAuthGuard } from './microsoft-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealthCheck(): object {
    return this.appService.getHealth();
  }

  @Post('login')
  async login(@Request() req) {
    return this.appService.login('123456'); // Simulate a logged user
  }

  @Get('protected')
  @UseGuards(JwtAuthGuard)
  localProtectedRoute() {
    return { message: 'JWT Local válido!' };
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  googleProtectedRoute() {
    return { message: 'Google JWT válido!' };
  }

  @Get('microsoft')
  @UseGuards(MicrosoftAuthGuard)
  microsoftProtectedRoute() {
    return { message: 'Microsoft JWT válido!' };
  }

}
