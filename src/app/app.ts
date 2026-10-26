import { AfterViewInit, Component, HostListener, OnDestroy, signal } from '@angular/core';
import { portfolio, Language, Project } from './portfolio.data';

@Component({ selector: 'app-root', standalone: true, templateUrl: './app.html' })
export class App implements AfterViewInit, OnDestroy {
  language: Language = 'es';
  darkMode = signal(false);
  menuOpen = false;
  activeSection = signal('inicio');
  filter = 'all';
  selectedProject: Project | null = null;
  formState = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  readonly year = new Date().getFullYear();
  private observer?: IntersectionObserver;

  constructor() {
    let theme: string | null = null;
    try {
      this.language = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es';
      theme = localStorage.getItem('portfolio-theme');
    } catch {
      /* Storage is optional. */
    }
    this.darkMode.set(
      theme === 'dark' ||
        (theme !== 'light' && !!window.matchMedia?.('(prefers-color-scheme: dark)').matches),
    );
    this.applyTheme();
    this.updateMetadata();
  }
  toggleTheme() {
    this.darkMode.update((dark) => !dark);
    this.applyTheme();
    try {
      localStorage.setItem('portfolio-theme', this.darkMode() ? 'dark' : 'light');
    } catch {
      /* Theme switching also works without storage. */
    }
  }
  private applyTheme() {
    document.documentElement.dataset['theme'] = this.darkMode() ? 'dark' : 'light';
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', this.darkMode() ? '#171b18' : '#f8f7f3');
  }
  get content() {
    return portfolio[this.language];
  }
  get projects() {
    return this.content.projects.filter((p) => this.filter === 'all' || p.category === this.filter);
  }
  ngAfterViewInit() {
    const initialTarget = document.getElementById(window.location.hash.slice(1));
    initialTarget?.scrollIntoView?.({ block: 'start', behavior: 'instant' });
    if (typeof IntersectionObserver === 'undefined') return;
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) this.activeSection.set(entry.target.id);
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: 0 },
    );
    document
      .querySelectorAll('main > section[id]')
      .forEach((section) => this.observer?.observe(section));
  }
  toggleLanguage() {
    this.language = this.language === 'es' ? 'en' : 'es';
    this.selectedProject = this.selectedProject
      ? (this.content.projects.find((p) => p.id === this.selectedProject?.id) ?? null)
      : null;
    try {
      localStorage.setItem('portfolio-language', this.language);
    } catch {
      /* Storage is optional. */
    }
    this.updateMetadata();
  }
  private updateMetadata() {
    document.documentElement.lang = this.language;
    document.title =
      this.language === 'es'
        ? 'Dante Rognoni — Desarrollador Full Stack · ByCode'
        : 'Dante Rognoni — Full Stack Developer · ByCode';
    document.querySelector('meta[name="description"]')?.setAttribute('content', this.content.meta);
  }
  @HostListener('document:keydown.escape') closeMenu() {
    this.menuOpen = false;
  }
  @HostListener('document:click', ['$event'])
  navigateWithinPage(event: MouseEvent) {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
    const hash = link?.getAttribute('href');
    if (!hash || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView?.({ block: 'start', behavior: 'instant' });
    window.history.replaceState(null, '', hash);
    this.menuOpen = false;
  }
  openProject(project: Project, dialog: HTMLDialogElement) {
    this.selectedProject = project;
    dialog.showModal();
    dialog.scrollTop = 0;
  }
  async sendMessage(event: Event, form: HTMLFormElement) {
    event.preventDefault();
    if (!form.checkValidity() || this.formState() === 'sending') return;
    this.formState.set('sending');
    try {
      const response = await fetch('https://formspree.io/f/mgonpqlg', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Message could not be sent');
      this.formState.set('success');
      form.reset();
    } catch {
      this.formState.set('error');
    }
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
