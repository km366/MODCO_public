import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string;
  password: string;
  conf_password: string;
  errorMessageEmail: string;
  errorMessagePassword: string;

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
    console.log(this.email, this.password);

    if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(this.email)) {
      this.errorMessageEmail = 'Email is not valid';
    } else {
      this.errorMessageEmail = '';
    }
    if (this.password === this.conf_password) {
      this.errorMessagePassword = '';
  } else{
    this.errorMessagePassword = 'Passwords don\'t match!';
  }
    if (this.errorMessageEmail === this.errorMessagePassword){
      this.goToLogin();
    }
  }
}
