import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foul-points',
  templateUrl: './foul-points.component.html',
  styleUrls: ['./foul-points.component.css']
})
export class FoulPointsComponent {
 @Input() value: number;
 @Input() isChoosen: boolean;
}
