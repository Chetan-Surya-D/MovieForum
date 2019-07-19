import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private user:any;

  private isAuthenticated: boolean = false; 

  constructor(private http: HttpClient,
              private router: Router) { }
   
  userSignUp(user: any) {
    this.isAuthenticated = true;
    return this.http.post('http://localhost:1025/auth/signup', user);
    
  }

  userLogIn(user: any) {
    return this.http.post('http://localhost:1025/auth/login', user);
  }
}
