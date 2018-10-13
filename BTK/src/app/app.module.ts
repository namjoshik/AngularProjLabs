import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CustExistComponent } from './login-page/cust-exist/cust-exist.component';
import { CustNoExistComponent } from './login-page/cust-no-exist/cust-no-exist.component';
import { NewCustComponent } from './login-page/cust-no-exist/new-cust/new-cust.component';
import { SelfEmployedComponent } from './login-page/cust-no-exist/new-cust/self-employed/self-employed.component';
import { RegisteredCompanyComponent } from './login-page/cust-no-exist/new-cust/registered-company/registered-company.component';
import { CommercialEnquiryComponent } from './login-page/cust-no-exist/new-cust/commercial-enquiry/commercial-enquiry.component';
import { BillContactComponent } from './login-page/cust-no-exist/new-cust/bill-contact/bill-contact.component';
import { FormStep1Component } from './form-step1/form-step1.component';
import { ProdOpt3Component } from './form-step1/prod-opt3/prod-opt3.component';
import { ProdOpt4Component } from './form-step1/prod-opt4/prod-opt4.component';
import { ProdOpt5Component } from './form-step1/prod-opt5/prod-opt5.component';
import { ProdOpt6Component } from './form-step1/prod-opt6/prod-opt6.component';
import { ProdOpt7Component } from './form-step1/prod-opt7/prod-opt7.component';
import { ProdOpt8Component } from './form-step1/prod-opt8/prod-opt8.component';
import { ProdOpt9Component } from './form-step1/prod-opt9/prod-opt9.component';
import { ProdOpt1Component } from './form-step1/prod-opt1/prod-opt1.component';



const appRoutes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home', component: LoginPageComponent },
  { path: 'login-page/cust-no-exist/new-cust', component: NewCustComponent},
  { path: 'form-step1', component: FormStep1Component },
  { path: 'form-step2', component: AppComponent },
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
    BillContactComponent,
    FormStep1Component,
    ProdOpt3Component,
    ProdOpt4Component,
    ProdOpt5Component,
    ProdOpt6Component,
    ProdOpt7Component,
    ProdOpt8Component,
    ProdOpt9Component,
    ProdOpt1Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
