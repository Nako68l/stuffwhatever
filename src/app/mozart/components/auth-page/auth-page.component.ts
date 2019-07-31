import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  
  rememberMe: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  allegro(user: User): void {
    console.log('allegro', user, this.rememberMe);
  }

  signUp(user: User): void {
    console.log('Sign Up', user);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
}
