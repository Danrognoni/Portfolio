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
import { TranslateModule } from '@ngx-translate/core';


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
    }, 5000); 
  }
}