import { Application, Request, Response, NextFunction } from "express";
import { BaseError} from "./base-error"

let BASE = "/users";

function configure(app:Application):void{
    console.log("Error handling");
    app.use((err:any, req:Request, res:Response, next:NextFunction) => {
        console.error(err);
        if(err.isBaseError){
            return handleBaseError(err, res);
        }
        else if(err instanceof Error){
            return res.status(500).json((err as Error).message);
        }
        res.status(500).json(err);
    });
}

function handleBaseError(err:BaseError, res:Response){
    res.status(BaseError.code2http(err.code)).json(err);
}


export default configure;