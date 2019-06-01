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
let LobbyMembershipService = class LobbyMembershipService {
    constructor(lobbyModel) {
        this.lobbyModel = lobbyModel;
    }
    leave(input) {
        return this.lobbyModel.findOne({ _id: input.lobbyId })
            .then(lobby => {
            if (lobby === undefined || lobby === null) {
                throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_NOT_FOUND);
            }
            if (lobby.members == null) {
                throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_INITIALIZATION_ERROR);
            }
            let index = lobby.members.findIndex(m => m._userId == input.userId);
            if (index === -1) {
                throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_NOT_A_MEMBER);
            }
            lobby.members.splice(index, 1);
            return lobby.save().then(() => true);
        });
    }
    join(input) {
        return this.lobbyModel.findOne({ _id: input.lobbyId })
            .then(lobby => {
            if (lobby === undefined || lobby === null) {
                throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_NOT_FOUND);
            }
            if (lobby.members == null) {
                throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_INITIALIZATION_ERROR);
            }
            if (lobby.members.length >= lobby.size) {
                throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_FULL);
            }
            let index = lobby.members.findIndex(m => m._userId == input.userId);
            if (index !== -1) {
                throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_ALREADY_MEMBER);
            }
            lobby.members.push({
                _userId: input.userId
            });
            return lobby.save().then(() => true);
        });
    }
    selectArmy(input) {
        return this.lobbyModel
            .findOne({ _id: input.lobbyId })
            .then(lobby => {
            if (lobby === undefined || lobby === null) {
                throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_JOIN_INPUT);
            }
            if (lobby.members == null) {
                throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_INITIALIZATION_ERROR);
            }
            let member = lobby.members.find(m => m._userId == input.userId);
            if (member === undefined || member === null) {
                throw new exceptions_1.BasicException(exceptions_1.ERRORS.LOBBY_NOT_A_MEMBER);
            }
            member.army = input.army;
            return lobby.save().then(() => true);
        });
    }
};
LobbyMembershipService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(lobby_schema_1.LobbyCollectionName)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LobbyMembershipService);
exports.LobbyMembershipService = LobbyMembershipService;
//# sourceMappingURL=lobby-membership.service.js.map