import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadingComponent } from './loading/loading.component';
import { loginComponent} from './login/login.component'
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { path: 'loading', component: loadingComponent },
  { path: 'login', component: loginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/loading', pathMatch: 'full' }, // Redirect to loading page by default
  { path: '**', redirectTo: '/loading' }, // Handle undefined routes, redirect to loading page
  // Add more routes as needed
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]

})
export class AppRoutingModule { }
