import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MicrosoftAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader) return false;

    const token = authHeader.split(' ')[1];

    try {
      const { data } = await axios.get(`https://graph.microsoft.com/v1.0/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      request.user = data;
      return true;
    } catch (error) {
      return false;
    }
  }
}
