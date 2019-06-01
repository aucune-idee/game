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
let GetLobbiesService = class GetLobbiesService {
    constructor(lobbyModel) {
        this.lobbyModel = lobbyModel;
    }
    getLobbies(input) {
        input = this.cleanInput(input);
        return this.lobbyModel.find(this.getParameters(input))
            .limit(input.size + 1)
            .then(lobbies => {
            return {
                lobbies: lobbies.length === input.size + 1 ? lobbies.splice(-1, 1) : lobbies,
                hasNext: lobbies.length === input.size + 1
            };
        });
    }
    getLobby(id) {
        return this.lobbyModel.findOne({ _id: id });
    }
    cleanInput(input) {
        input.start = input.start === undefined ? 0 : input.start,
            input.size = input.size === undefined ? 20 : input.size;
        if (input.start < 0) {
            input.start = 0;
        }
        if (input.size < 0) {
            input.size = 20;
        }
        else if (input.size) {
            input.size = 50;
        }
        return input;
    }
    getParameters(input) {
        let params = {};
        if (input.member !== undefined && input.member !== null) {
            params["$or"] = [
                { "members._userId": input.member },
                { owner: input.member }
            ];
        }
        return params;
    }
};
GetLobbiesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(lobby_schema_1.LobbyCollectionName)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GetLobbiesService);
exports.GetLobbiesService = GetLobbiesService;
//# sourceMappingURL=get-lobbies.service.js.map