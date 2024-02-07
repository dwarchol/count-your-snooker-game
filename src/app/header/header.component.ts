import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() gameName: string;
  @Input() frameNumber: number;
  @Input() breakFor: string;
  @Input() gameStarted: boolean;
}
