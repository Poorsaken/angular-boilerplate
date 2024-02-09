import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger from the correct path
// import { ScrollSmootherPlugin } from 'gsap/ScrollSmootherPlugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'angular-test';

  ngOnInit() {
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother); // Register ScrollSmoother

    // // Define animations for elements within your Angular components
    // gsap.from('.app-container', {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: '.app-container',
    //     start: 'top 90%', // Start animation when the top of the container is 90% in view
    //     end: 'bottom 80%',
    //     data-lag:, // End animation when the bottom of the container is 80% in view
    //     scrub: true, // Smoothly scrub through the animation timeline as the user scrolls
    //   },
    // });

    // Call the method to initialize the mouse follower
    this.initMouseFollower();
  }

  private initMouseFollower() {
    // Select the element with the class 'follower'
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

      window.addEventListener('mousemove', (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      });
    }
  }
}
