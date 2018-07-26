import { Component, OnInit } from '@angular/core';
import {appStore} from '../app.store';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get isLoading() {
    return appStore.isLoading;
  }
}
