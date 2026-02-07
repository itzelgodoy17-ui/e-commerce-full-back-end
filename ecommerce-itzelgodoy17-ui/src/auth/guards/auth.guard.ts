import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request: Request = context.switchToHttp().getRequest();

    const authorization = request.headers.authorization;

    if(!authorization) return false;

    const credentials = authorization.split("") [1];

    if(!credentials) return false;

    const [email, password] = credentials.split(":");

    if(!email || !password) return false;

    return true;
  }
}
