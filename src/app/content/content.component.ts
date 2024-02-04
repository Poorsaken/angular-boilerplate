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
  
  
        gsap.from(".name", {
          duration: 1,
          opacity:0,
          x: 0,
          ease: "power1.inOut",
          stagger: {
            grid: [7,15],
            from: "center",
            amount: 1.5
          }
        }).then(() =>{

          gsap.to(".name", {
            opacity:1,
            duration: 1,
            x:0,
            ease: "power2.in",

          })
        });

      }


  
}
