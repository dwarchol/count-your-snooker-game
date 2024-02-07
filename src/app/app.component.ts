import { Component } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'count-your-snooker-game';
  game: Game;
  gameStarted = false;
  
  constructor() {
  }

  startGame(event:{name: string, gameMode: number}){
    this.gameStarted = true;
    this.game = new Game(event.name, event.gameMode)
  }
}
