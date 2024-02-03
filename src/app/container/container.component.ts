import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {

  // private lastScrollTop =0;

  // constructor(private renderer: Renderer2, private el: ElementRef) {}

  // @HostListener('window:scroll', ['$event'])
  // onScroll() {
  //   const navbar = this.el.nativeElement.querySelector('.navbar');
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //   if (scrollTop > this.lastScrollTop) {
  //     // Scrolling down, show navbar
  //     this.renderer.setStyle(navbar, 'top', '0');
  //   } else {
  //     // Scrolling up, hide navbar
  //     this.renderer.setStyle(navbar, 'top', `-${navbar.offsetHeight}50px`);
  //   }

  //   this.lastScrollTop = scrollTop;
  // }
}
