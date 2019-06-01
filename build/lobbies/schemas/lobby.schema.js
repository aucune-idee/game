"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_auto_increment_reworked_1 = require("mongoose-auto-increment-reworked");
const schemas_1 = require("../../shared/schemas");
exports.LobbyCollectionName = "Lobby";
exports.LobbySchema = new mongoose_1.Schema(Object.assign({
    searchName: String,
    size: {
        type: Number,
        min: 2
    }
}, schemas_1.GameLobbySchema));
exports.LobbySchema.pre("save", (t, next) => {
    let now = new Date();
    if (!t.createdAt) {
        t.createdAt = now;
    }
    this.searchName = t.name ? t.name.toLocaleLowerCase() : "";
    next();
});
exports.LobbySchema.plugin(mongoose_auto_increment_reworked_1.MongooseAutoIncrementID.plugin, { modelName: exports.LobbyCollectionName });
//# sourceMappingURL=lobby.schema.js.map