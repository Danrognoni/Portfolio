import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { App } from './app';

describe('Portfolio', () => {
  let fixture: ComponentFixture<App>;
  let root: HTMLElement;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    root = fixture.nativeElement;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    localStorage.clear();
    delete document.documentElement.dataset['theme'];
  });

  it('presents the three featured projects and current technical skills', () => {
    expect(root.querySelector('h1')?.textContent).toContain('Ideas claras.');
    expect(root.querySelectorAll('.project-card')).toHaveLength(3);
    expect(root.querySelector('#bycode')?.textContent).toContain('construimos en equipo');
    expect(root.querySelector('.project-photography h3')?.textContent).toContain(
      'Portfolio para fotógrafos',
    );
    expect(root.textContent).not.toContain('Julieta');
    expect(root.querySelector('#stack')?.textContent).toContain('Go');
    expect(root.querySelector('#stack')?.textContent).toContain('DBeaver');
    expect(root.querySelector('.project-photography a')?.getAttribute('href')).toBe(
      'https://juli-fotografia-front-oafx.vercel.app/',
    );
  });

  it('filters the rendered projects and restores all of them', () => {
    const filters = root.querySelectorAll<HTMLButtonElement>('.filters button');
    filters[1].click();
    fixture.detectChanges();
    expect(root.querySelectorAll('.project-card')).toHaveLength(2);
    expect(root.querySelector('.project-photography')).toBeNull();
    filters[2].click();
    fixture.detectChanges();
    expect(root.querySelectorAll('.project-card')).toHaveLength(1);
    expect(root.querySelector('.project-photography')).not.toBeNull();
    expect(root.querySelector('.project-number')?.textContent).toContain('03 / 03');
    expect(root.querySelector('.result-count')?.textContent).toContain('01 proyecto');
    expect(filters[2].getAttribute('aria-pressed')).toBe('true');
    filters[0].click();
    fixture.detectChanges();
    expect(root.querySelectorAll('.project-card')).toHaveLength(3);
  });

  it('switches language, updates document metadata and persists the preference', () => {
    root.querySelector<HTMLButtonElement>('.language-button')!.click();
    fixture.detectChanges();
    expect(root.querySelector('h1')?.textContent).toContain('Clear ideas.');
    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toContain('Full Stack Developer');
    expect(localStorage.getItem('portfolio-language')).toBe('en');
    const second = TestBed.createComponent(App);
    expect(second.componentInstance.language).toBe('en');
    second.destroy();
  });

  it('switches theme, announces its state and restores the preference on a new visit', () => {
    localStorage.setItem('portfolio-theme', 'light');
    const button = root.querySelector<HTMLButtonElement>('.theme-button')!;
    button.click();
    fixture.detectChanges();
    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(button.getAttribute('aria-label')).toBe('Activar modo claro');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
    const returningVisit = TestBed.createComponent(App);
    expect(returningVisit.componentInstance.darkMode()).toBe(true);
    returningVisit.destroy();
    button.click();
    fixture.detectChanges();
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(button.getAttribute('aria-pressed')).toBe('false');
    expect(localStorage.getItem('portfolio-theme')).toBe('light');
  });

  it('uses the device theme when there is no saved preference', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }));
    const deviceVisit = TestBed.createComponent(App);
    expect(deviceVisit.componentInstance.darkMode()).toBe(true);
    deviceVisit.destroy();
    localStorage.setItem('portfolio-theme', 'light');
    const explicitPreference = TestBed.createComponent(App);
    expect(explicitPreference.componentInstance.darkMode()).toBe(false);
    explicitPreference.destroy();
  });

  it('closes mobile navigation when following a section link', () => {
    root.querySelector<HTMLButtonElement>('.menu-button')!.click();
    fixture.detectChanges();
    expect(root.querySelector('.navigation.is-open')).not.toBeNull();
    root.querySelector<HTMLAnchorElement>('.navigation a')!.click();
    fixture.detectChanges();
    expect(root.querySelector('.navigation.is-open')).toBeNull();
    expect(root.querySelector('.menu-button')?.getAttribute('aria-expanded')).toBe('false');
  });

  function completeForm() {
    const form = root.querySelector('form')!;
    form.querySelector<HTMLInputElement>('[name="name"]')!.value = 'Portfolio test';
    form.querySelector<HTMLInputElement>('[name="email"]')!.value = 'test@example.com';
    form.querySelector<HTMLTextAreaElement>('textarea')!.value =
      'A test message that is never sent.';
    return form;
  }

  it('shows success and clears the form after an accepted response', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', mockFetch);
    const form = completeForm();
    await fixture.componentInstance.sendMessage(new Event('submit'), form);
    fixture.detectChanges();
    expect(mockFetch).toHaveBeenCalledOnce();
    expect(root.querySelector('[role="status"]')?.textContent).toContain('¡Mensaje enviado!');
    expect(form.querySelector('textarea')!.value).toBe('');
  });

  it('keeps the message and offers direct email when submission fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Offline')));
    const form = completeForm();
    await fixture.componentInstance.sendMessage(new Event('submit'), form);
    fixture.detectChanges();
    expect(root.querySelector('[role="status"]')?.textContent).toContain('danrognoni@outlook.es');
    expect(form.querySelector('textarea')!.value).not.toBe('');
    expect(root.querySelector<HTMLButtonElement>('button[type="submit"]')!.disabled).toBe(false);
  });

  it('does not send invalid or duplicate submissions', async () => {
    const mockFetch = vi.fn();
    vi.stubGlobal('fetch', mockFetch);
    await fixture.componentInstance.sendMessage(new Event('submit'), root.querySelector('form')!);
    expect(mockFetch).not.toHaveBeenCalled();
    const form = completeForm();
    fixture.componentInstance.formState.set('sending');
    await fixture.componentInstance.sendMessage(new Event('submit'), form);
    expect(mockFetch).not.toHaveBeenCalled();
  });
});
