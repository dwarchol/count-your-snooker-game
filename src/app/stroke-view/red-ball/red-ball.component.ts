import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-red-ball',
  templateUrl: './red-ball.component.html',
  styleUrls: ['./red-ball.component.css']
})
export class RedBallComponent {
  @Input() numberOfReds:number;
}
