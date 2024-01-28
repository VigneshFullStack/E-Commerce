import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../models/Product';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.scss',
})
export class CategoryProductsComponent {
  activeCategoryId: number = 0;
  products: Product[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private prdoSrv: ProductService
  ) {
    this.activatedRoute.params.subscribe((res: any) => {
      this.activeCategoryId = res.id;
      this.loadProducts();
    });
  }

  loadProducts() {
    this.prdoSrv
      .getProductsByCategory(this.activeCategoryId)
      .subscribe((res: any) => {
        this.products = res.data;
      });
  }
}
