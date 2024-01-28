import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../../../models/Product';
import { Category } from '../../../../models/Category';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'web-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.scss',
})
export class WebProductsComponent {
  productList: Product[] = [];
  categoryList: Category[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.productList = res.data;
    });
  }

  getAllCategories() {
    this.productService.getCategories().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }
}
