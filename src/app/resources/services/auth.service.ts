import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginResponse: ResponseLogin;

  clear(): void {
    this.loginResponse = undefined;
  }

  isAuthenticated(): boolean {
    return Boolean(this.loginResponse && this.loginResponse.jwt);
  }

  constructor() { }
}
