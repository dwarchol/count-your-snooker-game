import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent {
  @Output() startGame = new EventEmitter<{name: string, gameMode: number}>();
  gameMode = 15;

  selectMode(value: number){
    this.gameMode = value;
  }

  start(name: string){
    this.startGame.emit({name: name, gameMode: this.gameMode})
  }
}
