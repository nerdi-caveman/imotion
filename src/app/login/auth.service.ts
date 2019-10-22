import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    constructor(private router: Router) {}
    currentUser: IUser;
  loginUser(username: string, res) {
      this.currentUser = {
          id: 1,
          username,
          firstname: res.firstname,
          lastname: res.lastname
      };
      if (!!this.currentUser) {
        window.localStorage.setItem('name', res.firstname);
        window.localStorage.setItem('username', this.currentUser.username);
        window.localStorage.setItem('auth-token', res.token);
        window.location.href = '';
    }
  }


  isAuthenticated() {
      return !!window.localStorage.getItem('auth-token') && window.localStorage.getItem('auth-token') !== 'undefined';
  }
}
