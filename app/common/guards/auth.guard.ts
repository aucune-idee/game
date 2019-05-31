import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try{
      return context.switchToHttp().getResponse().locals.jwt.payload != undefined;
    }
    catch(e:any){
      return false;
    }
  }
}
