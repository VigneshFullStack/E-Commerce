import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/Product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { Category } from '../../../../models/Category';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean = false;
  productObj: Product = {} as Product;
  categoryList: Category[] = [];
  productList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllCategories() {
    this.productService.getCategories().subscribe((res: any) => {
      this.categoryList = res.data;
      console.log('categoryList : ', this.categoryList);
    });
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.productList = res.data;
      console.log('productList : ', this.productList);
    });
  }

  editProduct(product: Product) {
    this.productObj = product;
    this.openSidePanel();
  }

  createProduct() {
    this.productService.createProduct(this.productObj).subscribe((res: any) => {
      if (res.result) {
        alert('Product Created..!');
        this.closeSidePanel();
        this.getAllProducts();
      } else {
        alert(res.message);
      }
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.productObj).subscribe((res: any) => {
      if (res.result) {
        alert('Product Updated..!');
        this.closeSidePanel();
        this.getAllProducts();
      } else {
        alert(res.message);
      }
    });
  }

  deleteProduct(productId: number) {
    const isDelete = confirm('Are you sure want to delete?');
    if (isDelete) {
      this.productService.deleteProduct(productId).subscribe((res: any) => {
        if (res.result) {
          alert('Product Deleted..!');
          this.getAllProducts();
        } else {
          alert(res.message);
        }
      });
    }
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  reset() {
    this.productObj = {} as Product;
  }

  closeSidePanel() {
    this.productObj = {} as Product;
    this.isSidePanelVisible = false;
  }
}
