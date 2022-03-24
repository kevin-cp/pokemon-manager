import { Injectable } from '@angular/core';
import {Pokemon} from "../modele/Pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[];

  constructor() {
    this.pokemons = [];
    let pokemon1 = new Pokemon("Bulbizarre", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "Graine", 'plante, poison', 0.6, 6.9 );
    let pokemon2 = new Pokemon("Herbizarre", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "Graine", 'plante, poison', 1, 13 );
    this.pokemons.push(pokemon1);
    this.pokemons.push(pokemon2);
  }
}
