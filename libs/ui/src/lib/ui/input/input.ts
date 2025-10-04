import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  type = 'text';
  placeholder = '';
  value = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: any) {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }
}
