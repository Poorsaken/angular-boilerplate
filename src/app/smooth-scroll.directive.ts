// smooth-scroll.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: 'a[appSmoothScroll]'
})
export class SmoothScrollDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    
    const targetId = this.el.nativeElement.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId) as HTMLElement;

    gsap.to(window, { duration: 1, scrollTo: { y: targetElement.offsetTop } });
  }
}
