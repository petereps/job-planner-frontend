import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Login} from '../models/login';
import {User} from '../models/user';
import {UserService} from '../user.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInfo: Login = {
    username: "",
    password: ""
  };

  constructor(private router: Router, private cookieService: CookieService, private userService: 
    UserService, private auth: AuthService) { }

  login(): void {
    this.userService.login(this.loginInfo) 
    .subscribe(user => {
      this.router.navigateByUrl("/jobs");
    });
  }
  logout(): void {
    this.userService.logout();
  }

  register(): void {
    this.userService.register(this.loginInfo)
    .subscribe(body => {
      console.log("Registered");
    });
  }

  

  ngOnInit() {
    this.userService.logout();
  }

}