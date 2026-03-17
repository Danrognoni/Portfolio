import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  imports : [NgClass]
})
export class NavbarComponent {
  mobileMenu: boolean = false;

  triggerNavItem(id: string) {
    this.mobileMenu = false;
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}