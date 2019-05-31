import { HttpStatus } from '@nestjs/common';
export interface ErrorData {
    code: Number;
    error: String;
    status: HttpStatus;
}
