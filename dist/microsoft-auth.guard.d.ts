import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class MicrosoftAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
