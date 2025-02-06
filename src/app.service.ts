import { Injectable } from '@nestjs/common';
import * as os from 'os';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(private readonly jwtService: JwtService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getHealth(): object {
    // Informações de sistema e uptime
    const uptime = process.uptime(); // Tempo de execução do app
    const memoryUsage = process.memoryUsage();
    const loadAverage = os.loadavg();

    // Health check básico
    return {
      status: 'ok',
      uptime: `${Math.floor(uptime / 60)} minutes ${Math.floor(uptime % 60)} seconds`,
      memory: {
        rss: `${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`,
        heapTotal: `${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`,
        heapUsed: `${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`,
      },
      system: {
        loadAverage: loadAverage.map((load) => load.toFixed(2)),
        platform: os.platform(),
        release: os.release(),
        cpus: os.cpus().length,
      },
    };
  }

  async login(userId: string) {
    const payload = { sub: userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (e) {
      return null;
    }
  }
}