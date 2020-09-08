import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin;

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();

  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(
      success => {
        this.router.navigate(['dashboard']),
          console.log(success);
      }, error => {
        console.error(error);
      });
  }
}
