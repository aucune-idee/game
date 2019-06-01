import { HttpStatus } from '@nestjs/common';
export interface ErrorData {
    code: Number;
    error: String;
    status: HttpStatus;
}
export declare const ERRORS: {
    [index: string]: ErrorData;
};
