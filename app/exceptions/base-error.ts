export enum ErrorCodes{
    LOBBY_INVALID_NAME,
    LOBBY_INVALID_TYPE,
    LOBBY_INVALID_OWNER,
    INVALID_AUTH,
}
const httpCodes = new Map();
httpCodes.set(ErrorCodes.LOBBY_INVALID_NAME, 400);
httpCodes.set(ErrorCodes.LOBBY_INVALID_TYPE, 400);
httpCodes.set(ErrorCodes.LOBBY_INVALID_OWNER, 500);
httpCodes.set(ErrorCodes.INVALID_AUTH, 401);


export class BaseError extends Error {
    
    public readonly isBaseError = true;
    
    constructor(public message: string, public code:ErrorCodes) {
        super();
        Error.captureStackTrace(this, this.constructor);
    }

    public static code2http(code:ErrorCodes): number{
        if(httpCodes.has(code))
            return httpCodes.get(code);
        return 500;
    }
}