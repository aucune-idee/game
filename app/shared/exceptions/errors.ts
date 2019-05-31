import { HttpStatus } from '@nestjs/common';

export interface ErrorData{
    code:Number,
    error:String,
    status:HttpStatus
}

const ERRORS:{[index:string] : ErrorData} = {
    LOBBY_NOT_FOUND:{
        code: 0,
        error: "Lobby not found",
        status: HttpStatus.FORBIDDEN
    },
    LOBBY_INITIALIZATION_ERROR:{
        code: 1,
        error: "Lobby's state incoherent",
        status: HttpStatus.FORBIDDEN
        
    },
    LOBBY_ALREADY_MEMBER:{
        code: 2,
        error: "Lobby's state incoherent",
        status: HttpStatus.FORBIDDEN
    },
    LOBBY_NOT_A_MEMBER:{
        code: 2,
        error: "Lobby's state incoherent",
        status: HttpStatus.FORBIDDEN
    },
    LOBBY_FULL:{
        code: 3,
        error: "Lobby full",
        status: HttpStatus.FORBIDDEN
    },
    LOBBY_INVALID_NAME:{
        code: 4,
        error: "Lobby full",
        status: HttpStatus.FORBIDDEN
    },
    LOBBY_INVALID_TYPE:{
        code: 5,
        error: "Lobby full",
        status: HttpStatus.FORBIDDEN
    },
    LOBBY_INVALID_OWNER:{
        code: 6,
        error: "Lobby full",
        status: HttpStatus.FORBIDDEN
    }
}