import { Component, VERSION } from '@angular/core';
import { NgModel } from '@angular/forms';

// LIB
import * as _ from 'underscore';
import * as moment from 'moment/moment';

@Component({
  selector: 'my-app',
  styles: [``],
  templateUrl: './app/app.component.html'
})
export class AppComponent {

  message: string = `Running Angular V.${VERSION.full}, Underscore.js V.${ _['VERSION']} and Moment.js V.${ moment.version}`;

  model: any = {
    left: true,
    middle: false,
    right: false
  };

  closeResult: string;

  constructor() {
  }

}