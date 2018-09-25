import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-existing',
  templateUrl: './not-existing.component.html',
  styleUrls: ['./not-existing.component.css']
})
export class NotExistingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  CustReg() {
    this.router.navigate(['/form-step1/not-existing/language']);
  }

}
