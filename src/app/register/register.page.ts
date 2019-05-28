import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email =  '';
  password = '';
  name = '';
  conf_password = '';
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

  async reg() {
    const l = this.email.split('@');
    if (this.name === undefined || this.name === '') {
      this.errorMessage = 'Please enter your name!';
    } else if (!this.email) {
      this.errorMessage = 'Please enter your email!';
    } else if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(this.email)) {
      this.errorMessage = 'Email is not valid';
    } else if (l[1] !== 'drexel.edu') {
      this.errorMessage = 'This is not a Drexel email';
    } else if (this.password !== this.conf_password) {
      this.errorMessage = 'Passwords don\'t match!';
    } else if (!Boolean(this.password) || !Boolean(this.conf_password)) {
      this.errorMessage = 'Please create a password!';
    } else {
      await firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
              () => {
                const user = firebase.auth().currentUser;

                user.sendEmailVerification().then(
                    () => {
                      console.log('Email sent');
                    },
                    (err) => {
                      console.error(err);
                    }
                );
              }
          );
      this.goToLogin();
    }
  }
  }

