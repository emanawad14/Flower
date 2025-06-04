import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {


  scroll: boolean = false;
  menuOpen: boolean = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scroll = window.scrollY > 0;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}
