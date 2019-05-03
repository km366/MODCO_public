import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  errorMessage: string;

  constructor(
      public navCtrl: NavController
  ) {
  }

  ngOnInit() {
  }

  goToHome() {
    this.navCtrl.navigateForward('/home');

  }

  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  log() {
    console.log(this.email, this.password);

    if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(this.email)) {
      this.errorMessage = 'Email is not valid';
    } else {
      this.errorMessage = '';
      this.goToHome();
    }

  }
}
