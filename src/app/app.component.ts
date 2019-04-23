import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },

    {
      title: 'Search',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'Bookmarks',
      url: '/bookmarks',
      icon: 'bookmark'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar

      // Initialize Firebase
    firebase.initializeApp({
        apiKey: "AIzaSyBUDtCeGfmrguwt52wCzRstK0rUUqSC1y8",
        authDomain: "modco-3b288.firebaseapp.com",
        databaseURL: "https://modco-3b288.firebaseio.com",
        projectId: "modco-3b288",
        storageBucket: "modco-3b288.appspot.com",
        messagingSenderId: "1079852918306",
      });
      
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
