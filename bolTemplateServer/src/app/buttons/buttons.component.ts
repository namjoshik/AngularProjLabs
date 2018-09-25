import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  fn = 1;
  formstep: string;
  visible = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }


  getNextStep (): number {

    if (this.fn < 8) {

      this.fn = this.fn + 1;
      this.formstep = '/form-step' + this.fn ;
      this.router.navigate([this.formstep]);
      return this.fn;
    } else {
      this.visible = false;
      this.router.navigate(['/form-submitted']);
  }
}

  getPreviousStep () {

    if (this.fn !== 1) {
      this.fn = this.fn - 1;
      this.formstep = '/form-step' + this.fn;
      this.router.navigate([this.formstep]);
    }
  }



}
