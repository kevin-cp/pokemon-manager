import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../modele/Pokemon";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[];

  constructor() {
    this.pokemons = [];
    let pokemon1 = new Pokemon("Bulbizarre", "", "Graine", 'plante, poison', 0.6, 6.9 );
    this.pokemons.push(pokemon1);
  }

  ngOnInit(): void {
  }

}
