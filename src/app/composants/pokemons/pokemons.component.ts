import {Component, Inject, OnInit} from '@angular/core';
import {Pokemon} from "../../modele/Pokemon";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent implements OnInit {

  public pokemons : Pokemon[];

  constructor(@Inject(PokemonService) private svc:PokemonService) {
  this.pokemons = this.svc.pokemons;
  }

  ngOnInit(): void {
  }

}
