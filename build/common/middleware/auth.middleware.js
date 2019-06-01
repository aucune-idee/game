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
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const config_service_1 = require("../../config/config.service");
const vars_1 = require("../../shared/vars");
let AuthMiddleware = class AuthMiddleware {
    constructor(configuration) {
        this.configuration = configuration;
    }
    use(req, res, next) {
        if (req === undefined || req.headers === undefined) {
            return next();
        }
        let auth = req.headers[vars_1.AUTHORIZATION];
        if (auth === undefined) {
            return next();
        }
        const token = auth.replace('Bearer ', '');
        try {
            let payload = jwt.verify(token, this.configuration.envConfig.jwt.secret);
            if (!req.jwt) {
                req.jwt = {};
            }
            req.jwt = payload;
        }
        catch (error) {
            console.error(error);
        }
        next();
    }
};
AuthMiddleware = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map