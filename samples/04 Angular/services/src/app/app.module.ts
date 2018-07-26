import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import {AppService} from './app.service';
import { ContactCountComponent } from './contact-count/contact-count.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import {FormsModule} from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactCountComponent,
    ContactNewComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appService: AppService) {
    appService.init();
  }
}
