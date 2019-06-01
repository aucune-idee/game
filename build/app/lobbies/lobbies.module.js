"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const lobbies_controller_1 = require("./controllers/lobbies.controller");
const lobby_schema_1 = require("./schemas/lobby.schema");
const services_1 = require("./services/");
let LobbiesModule = class LobbiesModule {
};
LobbiesModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: lobby_schema_1.LobbyCollectionName, schema: lobby_schema_1.LobbySchema }])],
        controllers: [lobbies_controller_1.LobbiesController],
        providers: [services_1.CreateLobbyService, services_1.GetLobbiesService, services_1.LobbyMembershipService]
    })
], LobbiesModule);
exports.LobbiesModule = LobbiesModule;
//# sourceMappingURL=lobbies.module.js.map