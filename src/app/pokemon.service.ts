import { Injectable } from '@angular/core';
import { Pokemon, PokemonList } from './pokemon.model';
import { POKEMON_LIST } from './pokemon-list.fake';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getpokemonList(): PokemonList {
    return POKEMON_LIST;
  }

  getPokemonbyId(id: number): Pokemon {
    const pokemon = POKEMON_LIST.find((pokemon) => pokemon.id == id);

    if(!pokemon) {
      throw new Error(`No pokemon found with ID ${id}`)
    }
    return pokemon;
  }
  getPokemonTypeList(): string[] {
    return[
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrick',
      'Poison',
      'Fée',
      'Vol',
    ];
  }
}
