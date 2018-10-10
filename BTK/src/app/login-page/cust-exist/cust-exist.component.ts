import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-exist',
  templateUrl: './cust-exist.component.html',
  styleUrls: ['./cust-exist.component.css']
})
export class CustExistComponent implements OnInit {

  custname: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onNextPage () {

    this.route.navigate(['/form-step1']);
  }

}
