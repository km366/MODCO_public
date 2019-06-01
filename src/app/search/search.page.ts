import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import * as firebase from 'firebase/app';
import { JobsDataService } from '../services/job-data/jobs-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  companyName: string;
  majors: any;
  constructor(
      public navCtrl: NavController,
      private jobsDataService: JobsDataService
  ) { }

  ngOnInit() {
  }

  parseSearchData(): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const major_id = [];
      const jobs = [];
      const major_jobs = [];
      const majorJobs = [];
      if (this.majors !== undefined) {
        const AdminRef = firebase.database().ref('AdminData/').child('/MajorIds');
        for (let j = 0; j < 99; j++) {
          AdminRef.once('value').then(
              (snapshot) => {
                const path = '/' + j.toString();
                const temp = (snapshot.child(path).val());
                major_jobs.push(temp);
              }, (error) => {
                console.log('Error: ' + error.code);
              });
        }
        for (const k of this.majors) {
          for (let j = 0; j < 99; j++) {
            AdminRef.once('value').then(
                (snapshot) => {
              const path = '/' + j.toString();
              let temp = (snapshot.child(path).val());
              temp = temp.replace(/\s/g, ''); // removing white spaces
              if (temp === k) {
                major_id.push(j);
              }
            }, (error) => {
              console.log('Error: ' + error.code);
            });
          }
        }
      }
      setTimeout(() => {
        major_jobs.reverse();
        for (const q of  major_id) {
          for (let i = 0; i < 50; i++) {
            const ref = firebase.database().ref('JobList/').child('/' + i.toString());
            ref.once('value').then(
                (snapshot) => {
                const name = (snapshot.child('/CompanyName').val());
                const title = (snapshot.child('/JobTitle').val());
                const majors = (snapshot.child('/Major').val());
                const location = (snapshot.child('/Location').val());
                const paid = (snapshot.child('/Paid').val());
                if (majors.includes(q)) {
                  const l = [];
                  for (const k of majors) {
                    l.push(major_jobs[k]);
                  }
                  majorJobs.push({name, title, l, location, paid});
                  resolve(majorJobs);
                }
              }, (error) => {
                reject(error);
              });
          }
        }
      }, 1000);

      if (this.companyName !== undefined) {
        for (let i = 0; i < 50; i++) {
          const ref = firebase.database().ref('JobList/').child('/' + i.toString());

          ref.once('value').then((snapshot) => {
            const name = (snapshot.child('/CompanyName').val());
            const title = (snapshot.child('/JobTitle').val());
            const majors = (snapshot.child('/Major').val());
            const location = (snapshot.child('/Location').val());
            const paid = (snapshot.child('/Paid').val());

            if (this.companyName.toLowerCase() === name.toString().toLowerCase()) {
              jobs.push({name, title, majors, location, paid});
            }

          },  (error) => {
            reject(error);
          });
        }
        resolve(jobs);
      }
    });
  }


  goToSearchDisplay() {
    this.parseSearchData().then(
        (data) => {
          this.jobsDataService.setJobData(data);
          this.navCtrl.navigateForward('/search-display');
        },
        (err) => {
          console.error(err);
        }
    );
  }
}

