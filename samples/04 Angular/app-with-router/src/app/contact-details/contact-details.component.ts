import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    console.log("ContactDetailsComponent.ctor");

    this.activatedRoute.params.pipe(map(params => params.id)).subscribe(()=> {
      console.log("id", this.id);
    });
  }

  get id() {
    return +this.activatedRoute.snapshot.params.id;
  }
}
