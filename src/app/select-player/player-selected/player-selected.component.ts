import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-selected',
  templateUrl: './player-selected.component.html',
  styleUrls: ['./player-selected.component.css']
})
export class PlayerSelectedComponent {
  @Input() playerNumber: number;
  @Input() playerName: string;
}
