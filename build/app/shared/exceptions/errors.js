"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const ERRORS = {
    LOBBY_NOT_FOUND: {
        code: 0,
        error: "Lobby not found",
        status: common_1.HttpStatus.FORBIDDEN
    },
    LOBBY_INITIALIZATION_ERROR: {
        code: 1,
        error: "Lobby's state incoherent",
        status: common_1.HttpStatus.FORBIDDEN
    },
    LOBBY_ALREADY_MEMBER: {
        code: 2,
        error: "Lobby's state incoherent",
        status: common_1.HttpStatus.FORBIDDEN
    },
    LOBBY_NOT_A_MEMBER: {
        code: 2,
        error: "Lobby's state incoherent",
        status: common_1.HttpStatus.FORBIDDEN
    },
    LOBBY_FULL: {
        code: 3,
        error: "Lobby full",
        status: common_1.HttpStatus.FORBIDDEN
    },
    LOBBY_INVALID_NAME: {
        code: 4,
        error: "Lobby full",
        status: common_1.HttpStatus.FORBIDDEN
    },
    LOBBY_INVALID_TYPE: {
        code: 5,
        error: "Lobby full",
        status: common_1.HttpStatus.FORBIDDEN
    },
    LOBBY_INVALID_OWNER: {
        code: 6,
        error: "Lobby full",
        status: common_1.HttpStatus.FORBIDDEN
    },
    LOBBY_JOIN_INPUT: {
        code: 7,
        error: "Input Error",
        status: common_1.HttpStatus.FORBIDDEN
    }
};
//# sourceMappingURL=errors.js.map