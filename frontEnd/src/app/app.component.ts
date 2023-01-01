import { Component, OnDestroy, OnInit } from '@angular/core';
import {RestApiService} from '../services/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  races: any;
  character: any;
  starting: any;

  constructor(private rest: RestApiService) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  title = 'character-creator';
  reqParam = {};
  ngOnInit()
 {
   this.rest.getRemove(null,'race/get', this.reqParam,'get').subscribe(
    (data: any) => {
      this.races =data;
      console.log(this.races);
    }
   );
   this.rest.getRemove(null,'character', this.reqParam,'get').subscribe(
    (data: any) => {
      this.character =data;
      console.log(this.character);
    }
   );
   this.rest.getRemove(null,'character/starting', this.reqParam,'get').subscribe(
    (data: any) => {
      this.starting =data;
      console.log('Starting Equipment:', this.starting);
    }
   );
 }
}
