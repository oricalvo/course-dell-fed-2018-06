import { Component } from '@angular/core';
import {store} from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log("AppComponent.ctor 7");
  }

  dec() {
    --store.counter;
  }

  inc() {
    ++store.counter;
  }

  get counter() {
    return store.counter;
  }
}
