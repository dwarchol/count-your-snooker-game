import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-play-as-guest',
  templateUrl: './play-as-guest.component.html',
  styleUrls: ['./play-as-guest.component.css']
})
export class PlayAsGuestComponent {
  @Input() playerNumber: number;
  @Output() selectPlayer = new EventEmitter<string>();

  setNameValue(name: string){
    this.selectPlayer.emit(name);
  }
}
