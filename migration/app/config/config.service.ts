import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    public readonly envConfig: any;
    
    
    constructor(){
        let env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "local";
        let secret = require(__dirname+'/secret'+(env == "local" ? "-local" : ""));
        
        this.envConfig = {
            port: process.env.PORT ? process.env.PORT : 3000,
            password:{
                minLength : 10,
            }
        };
        this.envConfig = this.merge(this.envConfig, secret);
    }
    
    
    private merge(a:any, b:any){
        for(let key in b){
            if(!a.hasOwnProperty(key) || !(b[key] instanceof Object)){
                a[key] = b[key];
            }else{
                a[key] = this.merge(a[key], b[key]);
            }
        }
        return a;
    }
}
