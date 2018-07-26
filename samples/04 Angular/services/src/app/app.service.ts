import { Injectable } from '@angular/core';
import {appStore, Contact} from './app.store';

@Injectable()
export class AppService {
  constructor() {
  }

  init() {
    this.reloadContacts();
  }

  add(contact: Contact) {
    appStore.contacts.push(contact);

    // appStore.contacts = appStore.contacts.concat([contact]);
  }

  inc() {
    ++appStore.counter;
  }

  refresh() {
    this.reloadContacts();
  }

  private reloadContacts() {
    appStore.isLoading = true;

    appStore.contacts = null;
    appStore.counter = 0;

    setTimeout(()=> {
      appStore.contacts = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        {"id": 3, "name": "Udi"}
      ];

      appStore.isLoading = false;
    }, 1500);
  }
}
