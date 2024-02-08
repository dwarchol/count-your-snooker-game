import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.css']
})
export class PlayerScoreComponent {
  @Input() playerName: string;
  @Input() playerNumber: number;
  @Input() points: number;
  @Input() frames: number;
  @Output() giveUp = new EventEmitter<null>();

  giveUpBtn(){
    this.giveUp.emit();
  }
}
