import { Component, ViewChild } from '@angular/core';
import { Game } from './game';
import { Player } from './player';
import { StrokeViewComponent } from './stroke-view/stroke-view.component';
import { HistoryItem } from './history-item';
import { HistoryItemType } from './history-item-type';

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
    this.startGame({ name: "newGame", gameMode: 10 });
    //-----------
  }

  selectPlayer(name: string, player: number) {
    if (player == 1) {
      this.player1 = new Player(name);
    }
    else {
      this.player2 = new Player(name);
    }
  }
  startGame(event: { name: string, gameMode: number }) {
    this.gameStarted = true;
    this.game = new Game(event.name, event.gameMode, this.player1, this.player2)
    var startingPlayer = Math.floor(Math.random() * 2) + 1;
    this.game.addFirstFrame(startingPlayer); //temp
    if (startingPlayer == 1) {
      this.player1AtTheTable = true;
    }
    console.log(this.game.getFrame().playerToBreak)
  }
  playerGaveUp(player: number) {
    this.startNewFrame(player % 2 + 1);
  }
  addPoints(value: number) {
    if (this.player1AtTheTable) {
      this.game.getFrame().player1Points += value;
      this.addHistory(new HistoryItem(HistoryItemType.points, 1, value));
    }
    else {
      this.game.getFrame().player2Points += value;
      this.addHistory(new HistoryItem(HistoryItemType.points, 2, value));
    }
  }
  miss() {
    console.log("Pudło");
    this.addHistory(new HistoryItem(HistoryItemType.miss, (this.player1AtTheTable ? 1 : 2)))
    this.player1AtTheTable = !this.player1AtTheTable;
  }
  safe() {
    console.log("Odstawna");
    this.addHistory(new HistoryItem(HistoryItemType.safe, (this.player1AtTheTable ? 1 : 2)))
    this.player1AtTheTable = !this.player1AtTheTable;
  }
  foul(value: number) {
    if (this.player1AtTheTable) {
      this.addHistory(new HistoryItem(HistoryItemType.foul, 1, value));
      this.game.getFrame().player2Points += value;
      this.player1AtTheTable = !this.player1AtTheTable;
    }
    else {
      this.addHistory(new HistoryItem(HistoryItemType.foul, 2, value));
      this.game.getFrame().player1Points += value;
      this.player1AtTheTable = !this.player1AtTheTable;
    }
  }

  startNewFrame(winner: number) {
    this.game.newNextFrame(winner);
  }

  addHistory(item: HistoryItem) {
    this.game.getFrame().addHistory(item);
  }
  undo() {
    if (this.game.getFrame().frameHistory.length!=0) {
      var lastItem = this.game.getFrame().removeLastHistoryItem();
      if (lastItem.playerNumber == 1) {
        this.player1AtTheTable = true;
        if (lastItem.type == HistoryItemType.points) {
          this.game.getFrame().player1Points -= lastItem.value;
        }
        if (lastItem.type == HistoryItemType.foul) {
          this.game.getFrame().player2Points -= lastItem.value;
        }
      }
      else {
        this.player1AtTheTable = false;
        if (lastItem.type == HistoryItemType.points) {
          this.game.getFrame().player2Points -= lastItem.value;
        }
        if (lastItem.type == HistoryItemType.foul) {
          this.game.getFrame().player1Points -= lastItem.value;
        }
      }
    }
  }
}
