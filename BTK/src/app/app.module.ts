import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CustExistComponent } from './login-page/cust-exist/cust-exist.component';
import { CustNoExistComponent } from './login-page/cust-no-exist/cust-no-exist.component';
import { NewCustComponent } from './login-page/cust-no-exist/new-cust/new-cust.component';



const appRoutes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login-page/cust-no-exist/new-cust', component: NewCustComponent},
  { path: '**', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CustExistComponent,
    CustNoExistComponent,
    NewCustComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
