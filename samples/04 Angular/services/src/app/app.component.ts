import { Component } from '@angular/core';
import {appStore} from './app.store';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Ori";

  constructor(private appService: AppService) {
  }

  inc() {
    this.appService.inc();
  }

  get contacts() {
    return appStore.contacts;
  }

  get counter() {
    return appStore.counter;
  }

  refresh() {
    this.appService.refresh();
  }
}

