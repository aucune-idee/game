"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./armies"));
__export(require("./game-type"));
function enum2Array(enumParam) {
    return Object.values(enumParam).filter(x => typeof x === 'string');
}
exports.enum2Array = enum2Array;
//# sourceMappingURL=index.js.map