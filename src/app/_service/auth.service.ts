import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  //method to check authenticated person
  isAuthenticated():boolean{
    if (localStorage.getItem('token')!==null) {
      return true;
      }
    return false;
  }

  //method for block order only for registered user
  canAccess(){
    if (!this.isAuthenticated()) {
      //redirect to login
      this.router.navigate(['/login']);
   }
   }
  //method to view menu only by loggedin user
  isLoggedIn(){
    return  (localStorage.getItem('token'));
    }

  //remove token
  removeToken(){
    localStorage.removeItem('token');
  }
}



