import { Component } from '@angular/core';

@Component({
  selector: 'app-foul',
  templateUrl: './foul.component.html',
  styleUrls: ['./foul.component.css']
})
export class FoulComponent {
  choosenValue = 4;
  choose(value: number) {
    this.choosenValue = value;
  }
}
