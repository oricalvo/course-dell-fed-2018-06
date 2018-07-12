import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];
  name: string;

  constructor(httpClient: HttpClient) {
    httpClient.get<Contact[]>("/api/contact").subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  add() {
    const contact = {
      id: -1,
      name: this.name,
    };

    this.contacts.push(contact);
  }
}

interface Contact {
  id: number;
  name: string;
}
