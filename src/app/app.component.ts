import { Component, ViewChild } from '@angular/core';
import { Game } from './game';
import { Player } from './player';
import { StrokeViewComponent } from './stroke-view/stroke-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(StrokeViewComponent) stroke: StrokeViewComponent;
  title = 'count-your-snooker-game';
  game: Game;
  gameStarted = false;
  player1: Player;
  player2: Player;
  player1AtTheTable = false;
  constructor() {
    //------------temp
    this.selectPlayer("gracz1", 1);
    this.selectPlayer("gracz2", 2);
    this.startGame({name: "newGame", gameMode: 10});
    //-----------
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
    var startingPlayer = Math.floor(Math.random() * 2)+1;
    this.game.addFirstFrame(startingPlayer); //temp
    if(startingPlayer==1){
      this.player1AtTheTable = true;
    }
    console.log(this.game.getFrame().playerToBreak)
  }
  playerGaveUp(player: number){

  }
  addPoints(value){
    if(this.player1AtTheTable){
      this.game.getFrame().player1Points+=value;
    }
    else{
      this.game.getFrame().player2Points+=value;
    }
  }
  miss(){
    console.log("Pudło");
    this.player1AtTheTable = !this.player1AtTheTable;
  }
  safe(){
    console.log("Odstawna");
    this.player1AtTheTable = !this.player1AtTheTable;
  }
  faul(number){

  }

  startNewFrame(){
    
  }
}
