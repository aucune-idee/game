"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class BasicException extends common_1.HttpException {
    constructor(data) {
        super(data, data.status);
    }
}
exports.BasicException = BasicException;
//# sourceMappingURL=basic.exception.js.map