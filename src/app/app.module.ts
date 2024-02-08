import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { DrawBallsComponent } from './game-settings/draw-balls/draw-balls.component';
import { PlayAsGuestComponent } from './select-player/play-as-guest/play-as-guest.component';
import { PlayerSelectedComponent } from './select-player/player-selected/player-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameSettingsComponent,
    DrawBallsComponent,
    PlayAsGuestComponent,
    PlayerSelectedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
