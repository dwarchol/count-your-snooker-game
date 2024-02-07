import { Component, Input } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() game: Game;
  @Input() gameStarted: boolean;
}
