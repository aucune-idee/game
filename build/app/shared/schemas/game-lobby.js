"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
exports.GameLobbySchema = {
    _id: Number,
    name: String,
    searchName: String,
    owner: Number,
    type: {
        type: String,
        enum: enums_1.enum2Array(enums_1.GameType)
    },
    members: [{
            _userId: Number,
            army: {
                type: String,
                enum: enums_1.enum2Array(enums_1.Armies)
            }
        }]
};
//# sourceMappingURL=game-lobby.js.map