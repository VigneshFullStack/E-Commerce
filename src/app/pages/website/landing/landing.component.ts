import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../models/Product';
import { Category } from '../../../../models/Category';
import { Router, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLinkActive],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
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

  navigateToProducts(id: number) {
    this.router.navigate(['/products', id]);
  }
}
