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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../common/guards/auth.guard");
const services_1 = require("../services/");
const create_lobby_1 = require("../dto/create-lobby");
let LobbiesController = class LobbiesController {
    constructor(createLobby, getLobbies, lobbyMembership) {
        this.createLobby = createLobby;
        this.getLobbies = getLobbies;
        this.lobbyMembership = lobbyMembership;
    }
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createLobby.create(input);
        });
    }
    getLobbies() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getLobbies.getLobbies({});
        });
    }
    getOwnLobbies(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getLobbies.getLobbies({ member: request.locals.jwt.payload.id });
        });
    }
    getLobby(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getLobbies.getLobby(id);
        });
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lobby_1.CreateLobbyDto]),
    __metadata("design:returntype", Promise)
], LobbiesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LobbiesController.prototype, "getLobbies", null);
__decorate([
    common_1.Get('own'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LobbiesController.prototype, "getOwnLobbies", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LobbiesController.prototype, "getLobby", null);
LobbiesController = __decorate([
    common_1.Controller('lobbies'),
    __metadata("design:paramtypes", [services_1.CreateLobbyService,
        services_1.GetLobbiesService,
        services_1.LobbyMembershipService])
], LobbiesController);
exports.LobbiesController = LobbiesController;
//# sourceMappingURL=lobbies.controller.js.map