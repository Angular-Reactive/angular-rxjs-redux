// Dumb component
// This component just get a list assigned to it.

import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  @Input() products: Observable<Product []>;

  constructor() { }

  ngOnInit(): void {
  }

}
