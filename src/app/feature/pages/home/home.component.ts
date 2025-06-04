import { Component } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { FeatureComponent } from "../feature/feature.component";
import { NavComponent } from "../../../core/layout/nav/nav.component";
import { FooterComponent } from "../../../core/layout/footer/footer.component";
import { TrustedComponent } from "../trusted/trusted.component";

@Component({
  selector: 'app-home',
  imports: [CategoryComponent, FeatureComponent, NavComponent, FooterComponent, TrustedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
