import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-test';

  ngAfterViewInit() {
    this.initMouseFollower();
  }

  private initMouseFollower() {
    const flair = document.querySelector('.follower');

    if (flair instanceof HTMLElement) {
      gsap.set(flair, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(flair, 'x', { duration: 0.3, ease: 'power3' });
      const yTo = gsap.quickTo(flair, 'y', { duration: 0.3, ease: 'power3' });

      let timeoutId: any;

      const onClick = () => {
        // Toggle between different sizes (adjust the values accordingly)
        const newSize = flair.style.width === '50px' ? '30px' : '50px';

        gsap.to(flair, { width: newSize, height: newSize, duration: 0.5, ease: 'power3.inOut' });

        // Reset the size after a delay (adjust the timeout duration as needed)
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          gsap.to(flair, { width: '30px', height: '30px', duration: 0.5, ease: 'power3.inOut' });
        }, 200); // 2000 milliseconds (2 seconds) delay, adjust as needed
      };

      flair.addEventListener('click', onClick);

      fromEvent<MouseEvent>(window, 'mousemove')
        .pipe(throttleTime(60))
        .subscribe((e) => {
          xTo(e.clientX);
          yTo(e.clientY);
        });
    }
  }
}
