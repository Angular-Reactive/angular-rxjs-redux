// Dumb component
// This component just get a product details assigned to it.

import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/index';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {

  @Input() products: Observable<Product[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
