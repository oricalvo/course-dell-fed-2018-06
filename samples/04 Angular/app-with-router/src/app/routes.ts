import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
// import {AdminComponent} from './admin/admin.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    loadChildren: "./admin/admin.module#AdminModule",
    // component: AdminComponent,
  },
  {
    path: 'details/:id',
    component: ContactDetailsComponent,
  },
];
