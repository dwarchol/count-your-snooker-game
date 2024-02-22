import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stroke-view',
  templateUrl: './stroke-view.component.html',
  styleUrls: ['./stroke-view.component.css']
})
export class StrokeViewComponent implements OnInit {
  @Input() gameMode: number;
  @Output() addPoints = new EventEmitter<number>();
  @Output() miss = new EventEmitter<null>();
  @Output() safe = new EventEmitter<null>();
  @Output() foul = new EventEmitter<number>();
  @Output() undo = new EventEmitter<null>();
  numberOfRed: number;
  colorBall = false;

  ngOnInit(): void {
    this.numberOfRed = this.gameMode;
    this.colorBall = false;
  }
  addValue(value) {
    if (this.colorBall) {
      this.addPoints.emit(value);
      this.colorBall = false;
    }
  }
  addRed() {
    this.addPoints.emit(1);
    this.removeRed()
    this.colorBall = true;
  }
  removeRed() {
    this.numberOfRed -= 1;
  }
  missBtn() { this.miss.emit() }
  safeBtn() { this.safe.emit() }
  foulBtn() { }
  undoBtn() { this.undo.emit() }
}
