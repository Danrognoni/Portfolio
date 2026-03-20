import { AfterViewInit, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import VanillaTilt from 'vanilla-tilt'; 

@Component({
  selector: 'app-services',
  imports: [TranslateModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements AfterViewInit{

  ngAfterViewInit() {
    const elements = document.querySelectorAll<HTMLElement>('[data-tilt]');
    VanillaTilt.init(Array.from(elements), {
      max: 15,         
      speed: 400,      
      glare: true,     
      'max-glare': 0.3, 
      perspective: 1000 
    });
  }
}

