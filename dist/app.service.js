"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const os = require("os");
const jwt_1 = require("@nestjs/jwt");
let AppService = class AppService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    getHello() {
        return 'Hello World!';
    }
    getHealth() {
        const uptime = process.uptime();
        const memoryUsage = process.memoryUsage();
        const loadAverage = os.loadavg();
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
    async login(userId) {
        const payload = { sub: userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async validateToken(token) {
        try {
            return this.jwtService.verify(token);
        }
        catch (e) {
            return null;
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AppService);
//# sourceMappingURL=app.service.js.map