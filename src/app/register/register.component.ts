import { Component, OnInit, EventEmitter } from '@angular/core';
import {Login} from '../models/login';
import {User} from '../models/user';
import {UserService} from '../user.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmPassword: String;
  loginInfo: Login = new Login;
  token: string;
  constructor(private router: Router, private cookieService: CookieService, private userService: 
    UserService, private auth: AuthService) { }
  

  register(): void {
    if (this.loginInfo.password != this.confirmPassword) {
      alert("Passwords do not match");
    }
    else {
      this.userService.register(this.loginInfo)
      .subscribe(body => {
        console.log("Registered");
        this.router.navigateByUrl('/login');
      });
    }
  }

  

  ngOnInit() {
    
  }

}