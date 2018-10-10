import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cust',
  templateUrl: './new-cust.component.html',
  styleUrls: ['./new-cust.component.css']
})
export class NewCustComponent implements OnInit {

  private selectedLink: string;
  setButtonOn = false;

  constructor(private route: Router) { }

  ngOnInit() {
  }

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

  onReturnHome () {
    this.route.navigate(['/home']);

  }

}
