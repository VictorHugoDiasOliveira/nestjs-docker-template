import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AppService } from './app.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private appService: AppService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) return false;

    const token = authHeader.split(' ')[1];
    const user = await this.appService.validateToken(token);
    if (!user) return false;

    request.user = user;
    return true;
  }
}
