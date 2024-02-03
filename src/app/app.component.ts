import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import Scrollbar from 'smooth-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-test';

  ngOnInit() {
    // Get the element by ID
    const element = document.querySelector("#myid");

    // Check if the element exists
    if (element instanceof HTMLElement) {
      // Initialize Smooth Scrollbar on the element with the ID 'myid'
      const myScrollbar = Scrollbar.init(element, { /* optional options */ });
    }
  }
}
