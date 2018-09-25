import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bolTemplateServer';

  formSteps = [
    {'name': 'form-step1'},
    {'name': 'form-step2'},
    {'name': 'form-step3'},
    {'name': 'form-step4'},
    {'name': 'form-step5'},
    {'name': 'form-step6'},
    {'name': 'form-step7'},
    {'name': 'form-step8'}
  ];
}
