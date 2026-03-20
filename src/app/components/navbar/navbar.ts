import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, TranslateModule],
  templateUrl: './navbar.html',
  standalone : true
})
export class NavbarComponent {
  mobileMenu: boolean = false;

    constructor(public translate:TranslateService){}

  triggerNavItem(id: string) {
    this.mobileMenu = false;
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


changeLanguage() {
  const currentLanguage = this.translate.currentLang || 'en';
  const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    this.translate.use(newLanguage);
}
}