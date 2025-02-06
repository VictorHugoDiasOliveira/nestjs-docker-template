"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let MicrosoftAuthGuard = class MicrosoftAuthGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader)
            return false;
        const token = authHeader.split(' ')[1];
        try {
            const { data } = await axios_1.default.get(`https://graph.microsoft.com/v1.0/me`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            request.user = data;
            return true;
        }
        catch (error) {
            return false;
        }
    }
};
exports.MicrosoftAuthGuard = MicrosoftAuthGuard;
exports.MicrosoftAuthGuard = MicrosoftAuthGuard = __decorate([
    (0, common_1.Injectable)()
], MicrosoftAuthGuard);
//# sourceMappingURL=microsoft-auth.guard.js.map