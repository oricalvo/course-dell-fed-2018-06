import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contacts: Contact[];
  name: string;
  showAdminSection: boolean = false;

  constructor(private httpClient: HttpClient) {
    httpClient.get<Contact[]>("/api/contact").subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  async ngOnInit() {
    this.contacts = await this.httpClient.get<Contact[]>("/api/contact").toPromise();
  }

  add() {
    const contact = {
      id: -1,
      name: this.name,
    };

    this.contacts.push(contact);
  }

  toggleAdminSection() {
    this.showAdminSection = !this.showAdminSection;
  }

  get toggleAdminSectionButtonCaption() {
    return this.showAdminSection ? "Hide Admin" : "Show Admin";
  }
}

interface Contact {
  id: number;
  name: string;
}
