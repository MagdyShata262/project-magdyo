import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import{Button, Footer, Header, Input, ProductCard} from '@project-magdyo/ui';
import{Card} from '@project-magdyo/ui';

@Component({
  imports: [NxWelcome, RouterModule,Button,Card,ProductCard,Header,Input,Footer ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'project-magdyo';
}
