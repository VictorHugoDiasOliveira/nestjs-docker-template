import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AppService } from './app.service';
export declare class JwtAuthGuard implements CanActivate {
    private appService;
    private reflector;
    constructor(appService: AppService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
