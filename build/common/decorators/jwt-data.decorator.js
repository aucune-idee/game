"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.JwtData = common_1.createParamDecorator((data, req) => {
    return req.jwt;
});
//# sourceMappingURL=jwt-data.decorator.js.map