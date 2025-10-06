import { Component } from '@angular/core';
import { ThemeToggle } from '../theme-toggle';

@Component({
  selector: 'lib-header',
  imports: [ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
