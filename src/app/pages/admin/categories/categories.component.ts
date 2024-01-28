import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Category } from '../../../../models/Category';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  categories$!: Observable<any>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categories$ = this.productService.getCategories().pipe(
      map((item: any) => {
        return item.data;
      })
    );
  }
}
