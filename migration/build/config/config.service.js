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
let ConfigService = class ConfigService {
    constructor() {
        let env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "local";
        let secret = require(__dirname + '/secret' + (env == "local" ? "-local" : ""));
        this.envConfig = {
            port: process.env.PORT ? process.env.PORT : 3000,
            password: {
                minLength: 10,
            }
        };
        this.envConfig = this.merge(this.envConfig, secret);
    }
    merge(a, b) {
        for (let key in b) {
            if (!a.hasOwnProperty(key) || !(b[key] instanceof Object)) {
                a[key] = b[key];
            }
            else {
                a[key] = this.merge(a[key], b[key]);
            }
        }
        return a;
    }
};
ConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map