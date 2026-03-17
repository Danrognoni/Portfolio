import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { Portfolio } from "./components/portfolio/portfolio";
import { Footer } from "./components/footer/footer";
import { Work } from "./components/work/work";
import { Blog } from "./components/blog/blog";
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Hero, About, Services, Portfolio, Footer, Work,  Blog, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
