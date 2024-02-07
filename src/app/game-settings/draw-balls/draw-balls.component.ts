import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-draw-balls',
  templateUrl: './draw-balls.component.html',
  styleUrls: ['./draw-balls.component.css']
})
export class DrawBallsComponent {
  @Input() size: number;
  @Input() selected: boolean;
}
