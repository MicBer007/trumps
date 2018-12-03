import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

import { HttpClientModule } from '@angular/common/http';
import { CardServiceService } from './services/card-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [CardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
