import { Component, inject } from '@angular/core';
import { Theme } from './theme';

@Component({
  selector: 'lib-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss'
})
export class ThemeToggle {
  public themeService = inject(Theme);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

}
