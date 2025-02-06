import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getHealthCheck(): object;
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProtectedData(): {
        message: string;
    };
    googleProtectedRoute(): {
        message: string;
    };
    microsoftProtectedRoute(): {
        message: string;
    };
    localProtectedRoute(): {
        message: string;
    };
}
