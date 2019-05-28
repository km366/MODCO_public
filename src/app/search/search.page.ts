import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  CompanyName: string;
  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goToSearchDisplay(CompanyName) {
    this.navCtrl.navigateForward('/search-display');
    for (let i = 0; i < 50; i++) {
      const ref = firebase.database().ref('JobList/').child('/' + i.toString());
      ref.once('value').then(function (snapshot) {
        const name = (snapshot.child('/CompanyName').val());
        const title = (snapshot.child('/JobTitle').val());
        const location = (snapshot.child('/Location').val());
        const paid = (snapshot.child('/Paid').val());
        if (CompanyName === name) {
          console.log(name);
          console.log(title);
          console.log(location);
          console.log(paid);
        }
      }, function (error) {
        console.log('Error: ' + error.code);
      });
    }
  }
}
