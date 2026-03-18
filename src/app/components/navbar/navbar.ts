import { NgClass, NgIf } from '@angular/common'; // Agregamos NgIf para los iconos
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true, // Asegúrate de que sea standalone si lo usas así
  templateUrl: './navbar.html',
  imports: [NgClass, NgIf]
})
export class NavbarComponent implements OnInit {
  mobileMenu: boolean = false;
  isDarkMode: boolean = false;

  ngOnInit() {
    // Al cargar, verificamos si ya existía una preferencia o si el sistema es dark
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    } else {
      this.isDarkMode = false;
      document.documentElement.classList.remove('dark');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  triggerNavItem(id: string) {
    this.mobileMenu = false;
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}