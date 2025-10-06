import { Component, inject } from '@angular/core';
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

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
