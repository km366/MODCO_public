import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { JobsDataService } from '../services/job-data/jobs-data.service';


@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.page.html',
  styleUrls: ['./search-display.page.scss'],
})
export class SearchDisplayPage implements OnInit {
  jobs: any;


  constructor(public navCtrl: NavController, private jobsDataService: JobsDataService) {
  }

  ngOnInit() {
    this.jobs = this.jobsDataService.getJobData();
    console.log('Search display', this.jobs);
  }

}
