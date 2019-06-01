import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JobsDataService {

  jobData: any;

  constructor() { }

  getJobData() {
    return this.jobData;
  }

  setJobData(newJobData) {
    this.jobData = newJobData;
  }
}
