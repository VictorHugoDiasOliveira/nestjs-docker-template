import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GoogleAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader) return false;

    const token = authHeader.split(' ')[1];

    try {
      const { data } = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
      request.user = data;
      return true;
    } catch (error) {
      return false;
    }
  }
}
