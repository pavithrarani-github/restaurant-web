import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  NodeApiUrl = "http://localhost:3100/api/user";

  //method for signup user
  signupUser (user:any):Observable <any> {
    const header = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<any>(this.NodeApiUrl+'/signup',user,header);
  }
  //method for login user
  loginUser (user:any):Observable <any> {
    console.log(user);
    const header = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<any>(this.NodeApiUrl+'/login',user,header);
  }
}
