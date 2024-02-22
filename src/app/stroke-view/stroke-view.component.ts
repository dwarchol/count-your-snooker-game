import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stroke-view',
  templateUrl: './stroke-view.component.html',
  styleUrls: ['./stroke-view.component.css']
})
export class StrokeViewComponent implements OnInit {
  @Input() gameMode: number;
  @Output() addPoints = new EventEmitter<number>();
  @Output("addFoul") foulEmitter = new EventEmitter<{value: number, givePlay: boolean}>();
  @Output() miss = new EventEmitter<null>();
  @Output() safe = new EventEmitter<null>();
  @Output() foul = new EventEmitter<number>();
  @Output() undo = new EventEmitter<null>();
  numberOfRed: number;
  colorBall = false;
  isFoul = false;
  isColorPhase = false;
  isFreeBall=false;
  nextColor = 1;
  ngOnInit(): void {
    this.numberOfRed = this.gameMode;
    this.colorBall = false;
  }
  isDisabled(number) {
    if (this.isColorPhase) {
      return number != this.nextColor
    }
    else {
      return !this.colorBall;
    }
  }
  addValue(value) {
    if(this.isFreeBall && this.nextColor<value){
      console.log(this.nextColor)
      this.addPoints.emit(this.nextColor)
      this.isFreeBall=false
      this.colorBall = true
      return
    }
    if(this.isColorPhase){
      if(!this.isDisabled(value)){
        this.addPoints.emit(value);
        this.nextColor++;
      }
    }
    else{
      if (this.colorBall) {
        this.addPoints.emit(value);
        if (this.numberOfRed > 0) {
          this.colorBall = false;
        }
        else {
          this.isColorPhase = true;
        }
      }
    }
  }
  addRed() {
    if(this.numberOfRed>0){
      this.addPoints.emit(1);
      this.removeRed()
      if(this.numberOfRed==0){
        this.nextColor = 2;
      }
    }
    this.colorBall = true;
  }
  removeRed() {
    this.numberOfRed -= 1;
  }
  missBtn() {
    if(this.isFreeBall){
      this.isFreeBall = false;
    }
    if (this.numberOfRed == 0) {
      this.isColorPhase = true;
    }
    this.miss.emit()
  }
  safeBtn() {
    if(this.isFreeBall){
      this.isFreeBall = false;
    }
    if (this.numberOfRed == 0) {
      this.isColorPhase = true;
    } this.safe.emit()
  }
  foulBtn() {
    if (this.numberOfRed == 0) {
      this.isColorPhase = true;
    } 
    this.isFoul = true
  }
  undoBtn() { this.undo.emit() }
  closeFaul() {
    this.isFoul = false;
  }
  addFoul(event) {
    if(event.givePlay){
      this.isFoul = false;
      this.foulEmitter.emit({value: event.value, givePlay: true});

    }
    else{
      this.isFoul = false;
      this.foulEmitter.emit({value: event.value, givePlay: false});
      this.numberOfRed -= event.removeRed;
      this.isFreeBall = event.freeBall;
    }
  }
}
