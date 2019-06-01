"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppModule_1;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_service_1 = require("./config/config.service");
const lobbies_module_1 = require("./lobbies/lobbies.module");
const shared_module_1 = require("./shared/shared.module");
const auth_middleware_1 = require("./common/middleware/auth.middleware");
let AppModule = AppModule_1 = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes('*');
    }
};
AppModule = AppModule_1 = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forRootAsync({
                imports: [AppModule_1],
                inject: [config_service_1.ConfigService],
                useFactory: (configService) => __awaiter(this, void 0, void 0, function* () {
                    return ({
                        uri: configService.envConfig.mongodbConnectChain,
                    });
                })
            }), lobbies_module_1.LobbiesModule, shared_module_1.SharedModule],
        controllers: [],
        providers: [config_service_1.ConfigService],
        exports: [config_service_1.ConfigService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map