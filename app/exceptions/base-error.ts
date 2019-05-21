export enum ErrorCodes{
    LOBBY_INVALID_NAME,
    LOBBY_INVALID_TYPE,
    LOBBY_INVALID_OWNER,
    INVALID_AUTH,
    LOBBY_LEAVE_INPUT,
    LOBBY_LEAVE_NOT_MEMBER,
    LOBBY_JOIN_INPUT,
    LOBBY_JOIN_ALREADY_MEMBER,
    LOBBY_JOIN_FULL
}
const httpCodes = new Map();
httpCodes.set(ErrorCodes.LOBBY_INVALID_NAME, 400);
httpCodes.set(ErrorCodes.LOBBY_INVALID_TYPE, 400);
httpCodes.set(ErrorCodes.LOBBY_INVALID_OWNER, 500);
httpCodes.set(ErrorCodes.INVALID_AUTH, 401);
httpCodes.set(ErrorCodes.LOBBY_LEAVE_INPUT, 400);
httpCodes.set(ErrorCodes.LOBBY_LEAVE_NOT_MEMBER, 401);
httpCodes.set(ErrorCodes.LOBBY_JOIN_INPUT, 400);
httpCodes.set(ErrorCodes.LOBBY_JOIN_ALREADY_MEMBER, 401);
httpCodes.set(ErrorCodes.LOBBY_JOIN_FULL, 401);

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