import { Component, effect, inject, signal } from '@angular/core';
import { Theme } from './theme';
import { Button } from './button/button';


@Component({
  selector: 'lib-theme-toggle',
  imports: [Button],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
 public themeService = inject(Theme);
  public currentTheme = signal<'light' | 'dark'>(this.themeService.currentTheme());

  constructor() {
    // ✅ مفعول تلقائي لتحديث المكوّن عند تغير الثيم
    effect(() => {
      this.currentTheme.set(this.themeService.currentTheme());
      this.updateStorybookBackground(this.currentTheme());
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  // ✅ هذه الدالة تتفاعل مع Storybook وتغيّر الخلفية أيضًا
  private updateStorybookBackground(theme: 'light' | 'dark') {
    if (typeof window === 'undefined') return;

    const html = document.documentElement;
    html.setAttribute('data-theme', theme);

    // تحديث خلفية Storybook تلقائيًا
    const storybookRoot = document.querySelector('#storybook-root') as HTMLElement;
    if (storybookRoot) {
      storybookRoot.style.backgroundColor = theme === 'dark' ? '#1a1a1a' : '#ffffff';
      storybookRoot.style.color = theme === 'dark' ? '#f0f0f0' : '#222222';
      storybookRoot.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    }
  }
}
