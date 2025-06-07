import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { HomeService } from '../../services/home/home.service';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { Iitems } from '../../interfaces/home/iitems';

@Component({
  selector: 'app-bestseller',
  imports: [


     CommonModule,
    CarouselModule,
    
    FormsModule,
  ],
  templateUrl: './bestseller.component.html',
  styleUrl: './bestseller.component.scss'
})
export class BestsellerComponent {

    bests: Iitems[] = [];

  private readonly homeServices = inject(HomeService);
  homeUnSubscribe: Subscription = new Subscription();

  ngOnInit(): void {
    this.getHomeScreens();
  }

  getHomeScreens() {
    this.homeUnSubscribe = this.homeServices.bestSeller().subscribe({
      next: (res) => {
         this.bests = res.bestSeller;
        console.log(res);
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  customOptions: OwlOptions = {
  loop: true,
  margin: 0,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: [
    '<i class="fa-solid fa-chevron-left text-lg"></i>',
    '<i class="fa-solid fa-chevron-right text-lg"></i>'
  ],
  responsive: {
    0: {
      items: 1,
    },
    460: {
      items: 3,
    },
    840: {
      items: 3,
    },
  },
  nav: true,
};


  ngOnDestroy(): void {
    this.homeUnSubscribe.unsubscribe();
  }

}
