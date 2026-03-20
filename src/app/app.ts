import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { Portfolio } from "./components/portfolio/portfolio";
import { Work } from "./components/work/work";
import { Blog } from "./components/blog/blog";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [NavbarComponent, Hero, About, Services, Portfolio, Work, Blog, Contact, Footer, RouterOutlet, CommonModule, TranslateModule]
})

export class App {
  private konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown']; 
  private currentSequence: string[] = [];
  public konamiActivated = false;

  private tapCount = 0;
  private lastTapTime = 0;
  private readonly TAP_THRESHOLD = 500; 

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.currentSequence.push(event.key);
    if (this.currentSequence.length > this.konamiCode.length) {
      this.currentSequence.shift();
    }
    if (this.isKonamiCodeCorrect()) {
      this.triggerEasterEgg();
    }
  }

  @HostListener('window:click', ['$event'])
  handleTapEvent(event: MouseEvent) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - this.lastTapTime;

    if (tapLength < this.TAP_THRESHOLD && tapLength > 0) {
      this.tapCount++;
    } else {
      this.tapCount = 1;
    }

    this.lastTapTime = currentTime;

    if (this.tapCount === 5) {
      this.triggerEasterEgg();
      this.tapCount = 0; 
    }
  }

  private isKonamiCodeCorrect(): boolean {
    return JSON.stringify(this.currentSequence) === JSON.stringify(this.konamiCode);
  }

  private triggerEasterEgg() {
    if (this.konamiActivated) return; 

    this.konamiActivated = true;
    const audio = new Audio('https://www.myinstants.com/media/sounds/secret-revealed.mp3');
    audio.volume = 0.5;
    audio.play();

    setTimeout(() => {
      this.konamiActivated = false;
      this.currentSequence = []; 
      this.tapCount = 0; 
    }, 5000); 
  }
}