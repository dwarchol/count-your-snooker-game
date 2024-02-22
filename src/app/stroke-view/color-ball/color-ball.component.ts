import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-ball',
  templateUrl: './color-ball.component.html',
  styleUrls: ['./color-ball.component.css']
})
export class ColorBallComponent {
  @Input() color: string;
  @Input() value: number;
  @Input() disabled: boolean;
  @Input() fb: boolean;
  
  getColor(){
    if(this.disabled && !this.fb)
    return this.color+"50";
    return this.color;
  }
  getBorder(){
    console.log(this.fb)
    if(this.fb){
      return "3px solid yellow"
    }
    else{
      return "1px solid black"
    }
  }
}
