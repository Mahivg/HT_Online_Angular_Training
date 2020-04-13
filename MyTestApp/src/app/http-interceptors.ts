import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpEventType
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./login/login.service";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";

export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Request object Immutable
    const myRequest = req.clone({
      headers: new HttpHeaders({
        Authorization: "apiKey"
      })
    });

    console.log("We interptuted the request...");

    return next.handle(myRequest).pipe(
      tap(event => {
        console.log("In Response Interceptor..");
        if (event.type == HttpEventType.Sent) {
          console.log("waiting for response");
        }
        if (event.type == HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
