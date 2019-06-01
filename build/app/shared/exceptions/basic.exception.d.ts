import { HttpException } from '@nestjs/common';
import { ErrorData } from './errors';
export declare class BasicException extends HttpException {
    constructor(data: ErrorData);
}
