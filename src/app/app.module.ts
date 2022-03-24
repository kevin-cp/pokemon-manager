import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GenerationsComponent} from "./composants/generations/generations.component";
import {PokemonsComponent} from "./composants/pokemons/pokemons.component";
import {PokemonComponent} from "./composants/pokemon/pokemon.component";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
    providers: [],
    exports: [
        GenerationsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
