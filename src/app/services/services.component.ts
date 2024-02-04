import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    this.startTextColorTransition('.gsap h1');

    // Initial styling for .box2 and .box3
    gsap.set(".box1, .box2, .box3, .boxnode, .box5, .box6, .box7, .box8, .box9", { opacity: 0, y: 0 });

    gsap.from(".box1", {
      opacity: 0,
      y: 1,
      duration: 0.2,
    }).then(() => {
      // This block will be executed after the first animation completes
      gsap.fromTo(".box1", { opacity: 0, y: 0 }, { opacity: 1, y: 1, duration: 0.2,
        scrollTrigger: {
          trigger: ".box1",
          start: "top 50%",
        },
      }).then(() => {
        // Animation for .box2 triggered after .box1 animation completes
        gsap.to(".box2", {
          opacity: 1,
          y: 1,
          duration: 0.2,
          scrollTrigger: {
            trigger: ".box2",
            start: "top 50%",
          },
        }).then(() => {
          // Animation for .box3 triggered after .box2 animation completes
          gsap.to(".box3", {
            opacity: 1,
            y: 1,
            duration: 0.2,
            scrollTrigger: {
              trigger: ".box3",
              start: "top 50%",
            },
          }).then(() => {
            // Animation for .box4 triggered after .box3 animation completes
            gsap.to(".boxnode", {
              opacity: 1,
              y: 1,
              duration: 0.2,
              scrollTrigger: {
                trigger: ".boxnode",
                
              },
            }).then(() => {
              // Repeat the above pattern for .box5 to .box9
              // ...

              gsap.to(".box5", {

                opacity:1,
                y:1,
                duration:0.2,
                scrollTrigger:{
                  trigger: ".box5",
                }
              }).then(() => {

                gsap.to(".box6", {

                  opacity:1,
                  y:1,
                  duration:0.2,
                  scrollTrigger:{
                    trigger: ".box6",
                  }
                })
              }).then(() => {

                gsap.to(".box6", {

                  opacity:1,
                  y:1,
                  duration:0.2,
                  scrollTrigger:{
                    trigger: ".box6",
                  }
                }).then(() => {

                  gsap.to(".box7", {
  
                    opacity:1,
                    y:1,
                    duration:0.2,
                    scrollTrigger:{
                      trigger: ".box7",
                    }
                  }).then(() => {

                    gsap.to(".box8", {
    
                      opacity:1,
                      y:1,
                      duration:0.2,
                      scrollTrigger:{
                        trigger: ".box8",
                      }
                    })
                    .then(() => {

                      gsap.to(".box9", {
      
                        opacity:1,
                        y:1,
                        duration:0.2,
                        scrollTrigger:{
                          trigger: ".box9",
                        }
                      })
                    })
                  })
                })
              })

            });
          });
        });
      });
    });
  }

  private startTextColorTransition(selector: string) {
    const textElements = document.querySelectorAll(selector);

    if (textElements) {
      gsap.fromTo(
        textElements,
        { color: 'gray' },
        { color: 'white', duration: 1, stagger: 0.2, ease: 'power2.inOut', repeat: -1, yoyo: true }
      );
    }
  }
}
