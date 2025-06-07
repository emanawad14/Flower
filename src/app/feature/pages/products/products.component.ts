import { Component, inject, Input, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/category/icategory';
import { ProductsService } from '../../services/Product/products.service';
import { Iproduct } from '../../interfaces/product/iproduct';
import { CategoryService } from '../../services/category/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  @Input() categorys :ICategory []=[];
   products:Iproduct[]=[];
 filteredProducts:Iproduct[]=[];

  private readonly product=inject(ProductsService);
  private readonly category=inject(CategoryService);


  

  ngOnInit(): void {
      this.getAllProduct();
  }







  


  getAllProduct()
  {
    this.product.getAllProduct().subscribe(
      {
       next:(res)=>
        {
          console.log(res.products);
          this.products=res.products;
          this.filteredProducts=this.products
        },
        error:(err)=>
        {
          console.log(err);
          

        }
      }
    )
  }


  getAllCategories() {
  this.category.allCategory().subscribe({
    next: (res) => {
      this.categorys = res.data;
    }
  });
}




  selectedCategoryId: string | null = null;




     clearFilter() {
      this.selectedCategoryId = null;
      this.filteredProducts = this.products;
     }


   
  filterByCategory(categoryId: string) {
  this.filteredProducts = this.products.filter((item) =>
    item.category === categoryId
  );

  this.selectedCategoryId = categoryId;
  console.log('helllllllo');
  console.log('النتائج بعد الفلترة:', this.filteredProducts);
}




}
