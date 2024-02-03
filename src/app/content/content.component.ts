import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterViewInit {

  ngAfterViewInit() {
    gsap.from(".towork", { opacity: 0, y: -100, duration: 1 })
      .then(() => {
        // This block will be executed after the first animation completes
        return gsap.fromTo(".based", { opacity: 0 , y:-10 }, { opacity: 1, y: 1 ,duration: 1 });      });
  }
}
