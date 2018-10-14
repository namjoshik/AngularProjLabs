import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-step1',
  templateUrl: './test.html',
  styleUrls: ['./form-step1.component.css']
})
export class FormStep1Component implements OnInit {

  checkModel = false;
  selectedLink: string;
  setButtonOn = false;

  constructor( private route: Router) { }

  ngOnInit() { }

  setradio(e: string): void {
      this.selectedLink = e;
      this.setButtonOn = true;
  }

  isSelected(name: string): boolean {
      if (!this.selectedLink) {
        return false;
      }
      return (this.selectedLink === name);
    }

  onCheckValid(event) {
    if (this.checkModel && this.setButtonOn) {
      this.route.navigate(['/step1']);
    } else {
      return this.setButtonOn = true;
    }
  }

  onSubmit(form: HTMLFormElement) {
    console.log(form);
    if (true) {
      alert('Good to Go');
    }
  }
}
