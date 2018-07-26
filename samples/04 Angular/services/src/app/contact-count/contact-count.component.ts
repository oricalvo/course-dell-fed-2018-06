import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {appStore} from '../app.store';

@Component({
  selector: 'app-contact-count',
  templateUrl: './contact-count.component.html',
  styleUrls: ['./contact-count.component.css']
})
export class ContactCountComponent {

  constructor() { }

  get count() {
    return appStore.contacts && appStore.contacts.length;
  }
}
