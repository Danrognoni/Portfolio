import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent as Navbar} from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Work } from './components/work/work';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import * as AOS from 'aos';
import { Blog } from "./components/blog/blog"; 
import { Services } from "./components/services/services";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Hero, About, Services, Portfolio, Work, Contact, Footer, Blog],
  templateUrl: './app.html'
})
export class App implements OnInit { 
  title = 'portfolio';

  ngOnInit() {

    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 100     
    });
  }
}