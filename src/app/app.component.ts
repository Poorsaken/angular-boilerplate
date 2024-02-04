import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-test';

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.initMouseFollower();
    this.initSmoothScroll();
  }

  private initMouseFollower() {
    const flair = document.querySelector('.follower');

    if (flair instanceof HTMLElement) {
      gsap.set(flair, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(flair, 'x', { duration: 0.3, ease: 'power3' });
      const yTo = gsap.quickTo(flair, 'y', { duration: 0.3, ease: 'power3' });

      let timeoutId: any;

      const onClick = () => {
        const newSize = flair.style.width === '50px' ? '30px' : '50px';

        gsap.to(flair, { width: newSize, height: newSize, duration: 0.5, ease: 'power3.inOut' });

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          gsap.to(flair, { width: '30px', height: '30px', duration: 0.5, ease: 'power3.inOut' });
        }, 200);
      };

      flair.addEventListener('click', onClick);

      fromEvent<MouseEvent>(window, 'mousemove')
        .subscribe((e) => {
          xTo(e.clientX);
          yTo(e.clientY);
        });
    }
  }

  private initSmoothScroll() {
    gsap.to('#smooth-wrapper', {
      y: 0, // Adjust this value based on your content height
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '#smooth-wrapper',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  }
}
