import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token-service/token.service';
import { Observable, tap } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,  private loaderService: LoaderService

  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    const token = this.tokenService.getToken;
    if (token) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token
        })
      });
      return this.handleRequest(authReq, next); // Envoyer la requête authentifiée via HttpHandler et retourner l'observable de la réponse
    }

    return this.handleRequest(req, next); // Retourner l'observable de la requête originale
  }


  private handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(tap((event) => {
            if (event instanceof HttpResponse) {
              this.loaderService.hide();
            }
          },
          (err: any) => {
            this.loaderService.hide();

          })
      );
  }
}






