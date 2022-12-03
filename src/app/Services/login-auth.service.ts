import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  constructor(private http: HttpClient) { }
  url:string='https://dummyjson.com/auth/login';
  loginData(data:any):Observable<any>{
    return this.http.get(this.url,data);
  }
  
}
