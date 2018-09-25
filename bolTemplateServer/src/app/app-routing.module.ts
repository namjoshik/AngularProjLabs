import { LanguageComponent } from './form-step1/not-existing/language/language.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormStep1Component } from './form-step1/form-step1.component';
import { FormStep2Component } from './form-step2/form-step2.component';
import { FormStep3Component } from './form-step3/form-step3.component';
import { FormStep4Component } from './form-step4/form-step4.component';
import { FormStep5Component } from './form-step5/form-step5.component';
import { FormStep6Component } from './form-step6/form-step6.component';
import { FormStep7Component } from './form-step7/form-step7.component';
import { FormStep8Component } from './form-step8/form-step8.component';
import { FormSubmittedComponent } from './form-submitted/form-submitted.component';
import { NoComponentComponent } from './no-component/no-component.component';

const routes: Routes = [
  { path: '', component: FormStep1Component },
  { path: 'form-step1', component: FormStep1Component },
  { path: 'form-step1/not-existing/language', component: LanguageComponent},
  { path: 'form-step2', component: FormStep2Component },
  { path: 'form-step3', component: FormStep3Component },
  { path: 'form-step4', component: FormStep4Component },
  { path: 'form-step5', component: FormStep5Component },
  { path: 'form-step6', component: FormStep6Component },
  { path: 'form-step7', component: FormStep7Component },
  { path: 'form-step8', component: FormStep8Component },
  { path: 'form-submitted', component: FormSubmittedComponent },
  { path: '**', component: NoComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [
  FormStep1Component,
  FormStep2Component,
  FormStep3Component,
  FormStep4Component,
  FormStep5Component,
  FormStep6Component,
  FormStep7Component,
  FormStep8Component,
  NoComponentComponent,
  FormSubmittedComponent
];
