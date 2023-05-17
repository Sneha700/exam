import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { loadingComponent } from './loading/loading.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    loadingComponent,
    DashboardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
