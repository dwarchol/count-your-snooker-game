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
  
  getColor(){
    if(this.disabled)
    return this.color+"50";
    return this.color;
  }
  
}
