import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
