import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponseModel, Category, ProductList } from '../../model/product';
import { map, Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  // productList: ProductList[] = [];
  productList = signal<ProductList[]>([]);
  categoryList$: Observable<Category[]> = new Observable<Category[]>();
  subscribtionList: Subscription[] = [];

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.loadAllProducts();
    this.categoryList$ = this.masterService.getAllCategory().pipe(map(item => item.data))
  }

  loadAllProducts() {
    this.subscribtionList.push(
      this.masterService.getAllProducts().subscribe((res: APIResponseModel) => {
        this.productList.set(res.data);
      })
    );
  }

  ngonDestroy(): void {
    this.subscribtionList.forEach((element) => {
      element.unsubscribe();
    });
  }
}
