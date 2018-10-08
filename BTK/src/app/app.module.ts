import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CustExistComponent } from './login-page/cust-exist/cust-exist.component';
import { CustNoExistComponent } from './login-page/cust-no-exist/cust-no-exist.component';
import { NewCustComponent } from './login-page/cust-no-exist/new-cust/new-cust.component';
import { SelfEmployedComponent } from './login-page/cust-no-exist/new-cust/self-employed/self-employed.component';
import { RegisteredCompanyComponent } from './login-page/cust-no-exist/new-cust/registered-company/registered-company.component';
import { CommercialEnquiryComponent } from './login-page/cust-no-exist/new-cust/commercial-enquiry/commercial-enquiry.component';
import { BillContactComponent } from './login-page/cust-no-exist/new-cust/bill-contact/bill-contact.component';



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
    NewCustComponent,
    SelfEmployedComponent,
    RegisteredCompanyComponent,
    CommercialEnquiryComponent,
    BillContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
