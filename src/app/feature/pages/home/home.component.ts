import { Component, inject, Input } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { FeatureComponent } from "../feature/feature.component";
import { NavComponent } from "../../../core/layout/nav/nav.component";
import { FooterComponent } from "../../../core/layout/footer/footer.component";
import { TrustedComponent } from "../trusted/trusted.component";
import { CustomerComponent } from "../customer/customer.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { ProductsComponent } from "../products/products.component";
import { ICategory } from '../../interfaces/category/icategory';
import { CategoryService } from '../../services/category/category.service';
import { BestsellerComponent } from "../bestseller/bestseller.component";


@Component({
  selector: 'app-home',
  imports: [CategoryComponent, FeatureComponent, NavComponent, FooterComponent, TrustedComponent, CustomerComponent, GalleryComponent, ProductsComponent, BestsellerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 categorys: ICategory[] = [];

private readonly categoryService = inject(CategoryService);

ngOnInit(): void {
  this.allCategory();
}

allCategory() {
  this.categoryService.allCategory().subscribe({
    next: (res) => {
      console.log(res.categories);
      this.categorys = res.categories;
    },
    error: (err) => {
      console.log(err);
    }
  });
}

  


}
