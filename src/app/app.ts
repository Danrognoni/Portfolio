import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { Portfolio } from "./components/portfolio/portfolio";
import { Footer } from "./components/footer/footer";
import { Clients } from "./components/clients/clients";
import { Work } from "./components/work/work";
import { Statistics } from "./components/statistics/statistics";
import { Blog } from "./components/blog/blog";
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Hero, About, Services, Portfolio, Footer, Clients, Work, Statistics, Blog, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
