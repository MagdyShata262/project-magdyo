import { Component } from '@angular/core';
import { ThemeToggle } from '../theme-toggle';

@Component({
  selector: 'lib-footer',
  imports: [ThemeToggle],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  public currentYear = new Date().getFullYear(); // 👈 متغير السنة
}
