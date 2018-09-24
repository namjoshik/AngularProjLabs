import { Component, OnInit } from '@angular/core';
import { ingredient } from '../SharedAssets/ingredient.model'


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: ingredient[] = [
    new ingredient ('Apples', 10),
    new ingredient ('Tomatoes', 5)
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
