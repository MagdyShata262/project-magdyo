import { Injectable, signal } from '@angular/core';
export type theme = 'light' | 'dark';
@Injectable({
  providedIn: 'root',
})
export class Theme {
  private readonly themeKey = 'ui-theme';
  currentTheme = signal<theme>('light');
  constructor() {
    this.loadTheme();
  }
  toggleTheme(): void {
    const newTheme = this.currentTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
  setTheme(theme: theme): void {
    this.currentTheme.set(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.themeKey, theme);
  }
  private loadTheme(): void {
    const savedTheme = localStorage.getItem(this.themeKey) as theme;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    const theme = savedTheme || systemTheme;
    this.setTheme(theme);
  }
}
