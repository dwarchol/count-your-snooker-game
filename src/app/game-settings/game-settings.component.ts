import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent {
  @Input() isGameStartable: boolean;
  @Output() startGame = new EventEmitter<{name: string, gameMode: number}>();
  gameMode = 15;
  gameName = '';

  selectMode(value: number){
    this.gameMode = value;
  }

  start(){
    this.startGame.emit({name: this.gameName, gameMode: this.gameMode})
  }
}
