import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DeckData } from './data/DeckData';
import { DeckBuilderComponent } from './components/deck-builder/deck-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    DeckBuilderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DeckData],
  bootstrap: [AppComponent]
})
export class AppModule { }
