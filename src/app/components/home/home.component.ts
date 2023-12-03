import { Component, ElementRef, NgZone, Renderer2 } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private renderer: Renderer2, private el: ElementRef, private ngZone: NgZone) {}

  ngOnInit() {
    // Check if running in a browser environment
    if (this.isBrowser()) {
      this.ngZone.runOutsideAngular(() => {
        const options = {
          strings: [ "Front Developer",],
          typeSpeed: 40,
          backSpeed: 25,
          backDelay: 1000,
          startDelay: 500,
          loop: true,
        };

        const typed = new Typed('.typed', options);
      });
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}
