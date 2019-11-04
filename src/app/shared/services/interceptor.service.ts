import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class InterceptorService implements HttpInterceptor{
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if(token){
    req = req.clone({headers: req.headers.append('Authorization', `Bearer ${token}`)})
    return next.handle(req);
    }
    return next.handle(req);
  }
  constructor() { }
}
