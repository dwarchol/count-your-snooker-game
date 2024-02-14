import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { DrawBallsComponent } from './game-settings/draw-balls/draw-balls.component';
import { PlayAsGuestComponent } from './select-player/play-as-guest/play-as-guest.component';
import { PlayerSelectedComponent } from './select-player/player-selected/player-selected.component';
import { PlayerScoreComponent } from './player-score/player-score.component';
import { BreakComponent } from './player-score/break/break.component';
import { FormsModule } from '@angular/forms';
import { StrokeViewComponent } from './stroke-view/stroke-view.component';
import { RedBallComponent } from './stroke-view/red-ball/red-ball.component';
import { ColorBallComponent } from './stroke-view/color-ball/color-ball.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameSettingsComponent,
    DrawBallsComponent,
    PlayAsGuestComponent,
    PlayerSelectedComponent,
    PlayerScoreComponent,
    BreakComponent,
    StrokeViewComponent,
    RedBallComponent,
    ColorBallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
