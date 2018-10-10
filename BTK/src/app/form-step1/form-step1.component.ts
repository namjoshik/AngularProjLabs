import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-step1',
  templateUrl: './form-step1.component.html',
  styleUrls: ['./form-step1.component.css']
})
export class FormStep1Component implements OnInit {

  checkModel: false;

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    this.checkModel = $event.target.checked;
  }

  onCheckValid () {
      if ( this.checkModel ) {
        return true;
      }
    }
}
