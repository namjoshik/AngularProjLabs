import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { CustomerDetailsComponent } from './form-step1/customer-details/customer-details.component';
import { NotExistingComponent } from './form-step1/not-existing/not-existing.component';
import { LanguageComponent } from './form-step1/not-existing/language/language.component';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SharedComponent,
    CustomerDetailsComponent,
    NotExistingComponent,
    LanguageComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
