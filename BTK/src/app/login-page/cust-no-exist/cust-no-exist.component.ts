import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-no-exist',
  templateUrl: './cust-no-exist.component.html',
  styleUrls: ['./cust-no-exist.component.css']
})
export class CustNoExistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  CustReg() {
    this.router.navigate(['/login-page/cust-no-exist/new-cust']);
  }

}
