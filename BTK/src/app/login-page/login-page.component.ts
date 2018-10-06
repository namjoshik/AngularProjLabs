import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private selectedLink: string;
  setButtonOn = false;
  constructor() { }

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

}
