import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../modele/Pokemon";


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {

  @Input() public pokemon! : Pokemon;

  constructor() {

  }

  ngOnInit(): void {
  }

}
