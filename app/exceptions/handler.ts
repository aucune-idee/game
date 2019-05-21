import { Application,Request, Response, NextFunction } from "express";
import { Router } from 'express';
import { BaseError} from "./base-error"

let BASE = "/users";

function configure(app:Application):void{
    console.log("Error handling");
    app.use((err:any, req:Request, res:Response, next:NextFunction) => {
        console.error("New errooooorrrr");
        if(err.isBaseError){
            return handleBaseError(err as BaseError, res);
        }
        res.status(500).json(err);
    });
}

function handleBaseError(err:BaseError, res:Response){
    console.log("err", err);
    return res.status(BaseError.code2http(err.code)).json(err);
}


export default configure;