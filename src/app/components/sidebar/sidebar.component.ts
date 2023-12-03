import { Component, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  {
  constructor(private renderer: Renderer2, private el: ElementRef, private ngZone: NgZone) {}

  ngOnInit() {
   
  }



} 
