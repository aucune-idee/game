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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lobby_schema_1 = require("../../schemas/lobby.schema");
const exceptions_1 = require("../../../shared/exceptions");
let CreateLobbyService = class CreateLobbyService {
    constructor(lobbyModel) {
        this.lobbyModel = lobbyModel;
    }
    create(input) {
        checkInputs(input);
        return this.lobbyModel.create({
            name: input.name,
            type: input.type,
            owner: input.owner,
            members: [{
                    _userId: input.owner
                }]
        });
    }
    checkInputs(input) {
        if (input.name === undefined || input.name === null || input.name.trim().length === 0) {
            throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_INVALID_NAME);
        }
        if (input.type === undefined || input.type === null) {
            throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_INVALID_TYPE);
        }
        if (input.owner === undefined || input.owner === null) {
            throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_INVALID_OWNER);
        }
        input.name = input.name.trim();
        return Promise.resolve(input);
    }
};
CreateLobbyService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(lobby_schema_1.LobbyCollectionName)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CreateLobbyService);
exports.CreateLobbyService = CreateLobbyService;
//# sourceMappingURL=create-lobby.service.js.map