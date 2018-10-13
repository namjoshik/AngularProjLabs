import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-step1',
  templateUrl: './form-step1.component.html',
  styleUrls: ['./form-step1.component.css']
})
export class FormStep1Component implements OnInit {

  checkModel = false;
  selectedLink = 'hakuna';
  setButtonOn = false;

  constructor() { }

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
}
