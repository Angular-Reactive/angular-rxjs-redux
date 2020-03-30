// Dumb component
// This component just get a list assigned to it.

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  @Input() products;

  constructor() { }

  ngOnInit(): void {
  }

}
