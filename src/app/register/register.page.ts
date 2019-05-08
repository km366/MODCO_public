import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string;
  email: string;
  password: string;
  conf_password: string;
  errorMessage: string;
  constructor(
      public navCtrl: NavController
  ) {
  }

  ngOnInit() {
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  reg() {
    console.log(this.name, this.conf_password, this.email, this.password);
    if (this.name === undefined || this.name === '') {
      this.errorMessage = 'Please enter your name!';
    } else if (!this.email) {
      this.errorMessage = 'Please enter your email!';
    } else if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(this.email)) {
      this.errorMessage = 'Email is not valid';
    } else if (this.password !== this.conf_password) {
      this.errorMessage = 'Passwords don\'t match!';
    } else if (!Boolean(this.password) || !Boolean(this.conf_password)) {
      this.errorMessage = 'Please create a password!';
    } else {
      this.goToLogin();
      this.errorMessage = '';
      this.email = '';
      this.password = '';
      this.conf_password = '';
      this.name = '';
    }
  }
}
