import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import * as firebase from 'firebase/app';


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
    if (this.email === undefined && this.password === undefined) {
      this.errorMessage = 'Please enter your email and password. If you do not have an account please register.';
    } else if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(this.email)) {
      this.errorMessage = 'Email is not valid';
    } else if (this.password === undefined) {
      this.errorMessage = 'Please enter your password';
    } else {
      this.errorMessage = '';
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          () => {
            const user = firebase.auth().currentUser;
            if (user.emailVerified) {
              this.goToHome();
            } else {
              this.errorMessage = 'Please verify your email first!';
            }
          },
      (err) => {
            this.errorMessage = 'Invalid Username or password!';
            console.log(err);
      });
    }
  }
}
