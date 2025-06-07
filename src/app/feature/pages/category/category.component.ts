import { Component, inject, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { ICategory } from '../../interfaces/category/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category',
  imports: [ CarouselModule ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {

  @Input() categorys:ICategory[]=[]
  private readonly categoryService=inject(CategoryService);

  ngOnInit(): void {
      this.allCategory()
  }
  allCategory()
  {
    this.categoryService.allCategory().subscribe(
      {
        next:(res)=>
        {
           console.log(res.categories); 
           this.categorys=res.categories
        },
        error:(err)=>
        {
          console.log(err);
        }
      }
    )

  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
}
