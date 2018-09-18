import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styles: [`
  .apply {
    color: aliceblue;
  }
  `]
})
export class DirectiveAssignmentComponent implements OnInit {


  display = true;
  noOfClicks = 0;
  clickCounter = [];


  toggleDisplay () {

    this.noOfClicks = this.noOfClicks + 1;
    this.clickCounter.push(this.noOfClicks);
    return this.display = this.noOfClicks % 2 === 0;
  }
  constructor() { }

  ngOnInit() {
  }

}
