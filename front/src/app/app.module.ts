import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameControlComponent } from './game/game-control/game-control.component';
import { GameNumberComponent } from './game/game-number/game-number.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameControlComponent,
    GameNumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
