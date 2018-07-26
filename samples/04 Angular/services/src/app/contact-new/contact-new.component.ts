import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent {
  name: string;

  constructor(private contactService: AppService) { }

  add() {
    const contact = {
      id: -1,
      name: this.name,
    }

    this.contactService.add(contact);
  }
}
