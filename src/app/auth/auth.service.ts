import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _userIsAuthenticated = false;

  constructor() {
  }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
    console.log(`setting auth var ${this._userIsAuthenticated}`);
  }

  get userIsAuthenticated() {
    console.log(this._userIsAuthenticated)
    return this._userIsAuthenticated;
  }
}
