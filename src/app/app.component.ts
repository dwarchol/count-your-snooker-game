import { Component } from '@angular/core';
import { Game } from './game';
import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'count-your-snooker-game';
  game: Game;
  gameStarted = false;
  player1: Player;
  player2: Player;

  constructor() {
  }

  selectPlayer(name: string, player: number){
    if(player==1){
      this.player1 = new Player(name);
    }
    else{
      this.player2 = new Player(name);
    }
  }
  startGame(event:{name: string, gameMode: number}){
    this.gameStarted = true;
    this.game = new Game(event.name, event.gameMode, this.player1, this.player2)
    this.game.addFirstFrame(1); //temp
  }
  playerGaveUp(player: number){

  }
}
