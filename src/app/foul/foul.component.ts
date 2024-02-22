import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-foul',
  templateUrl: './foul.component.html',
  styleUrls: ['./foul.component.css']
})
export class FoulComponent {
  @Output() addFoul = new EventEmitter<{value: number, freeBall: boolean, removeRed: number}>();
  @Output() closeTab = new EventEmitter<null>();
  @Input() redLeft: number;
  choosenValue = 4;
  removeReds = 0;
  isFreeBall = false;
  choose(value: number) {
    this.choosenValue = value;
  }
  close(){
    this.closeTab.emit();
  }
  add(){
    this.addFoul.emit({value: this.choosenValue, freeBall: this.isFreeBall, removeRed: this.removeReds})
  }
  increaseRed(){
    this.removeReds++;
  }
  decreaseRed(){
    this.removeReds--;
  }
}
