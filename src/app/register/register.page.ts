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
    console.log(this.email, this.password);

    if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(this.email)) {
      this.errorMessage = 'Email is not valid';
    } else {
      this.errorMessage = '';
      this.goToLogin();
    }

  }
}
