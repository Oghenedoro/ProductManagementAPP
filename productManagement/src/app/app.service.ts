import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/Http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'http://localhost:8080/app/user';
  authenticated: boolean = false;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  authenticate(credentials, callback) {
    if (credentials) {
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);
      const headers = new HttpHeaders(credentials ? {
        authorization: 'Basic' + token
      } : {});
      
      this.http.get(this.url, { headers:headers }).subscribe(response => {
        if (response['name']) {
          console.log(response);
          this.authenticated = true;

        } else {
          this.authenticated = false;

        }
        return callback && callback();

      });

    }
  }
  logout(callback) {
    return callback && callback();
  }
}
