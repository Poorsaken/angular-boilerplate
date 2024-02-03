import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.startTextColorTransition('.gsap h1');
  }

  private startTextColorTransition(selector: string) {
    const textElements = document.querySelectorAll(selector);

    if (textElements) {
      gsap.fromTo(
        textElements,
        { color: 'gray' }, // Starting color (gray)
        { color: 'white', duration: 1, stagger: 0.5, ease: 'power2.inOut', repeat: -1 , yoyo:true} // Ending color (black), duration, and stagger
      );
    }
  }
}
