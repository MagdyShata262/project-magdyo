import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
}
