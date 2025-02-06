import { JwtService } from '@nestjs/jwt';
export declare class AppService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    getHello(): string;
    getHealth(): object;
    login(userId: string): Promise<{
        access_token: string;
    }>;
    validateToken(token: string): Promise<any>;
}
