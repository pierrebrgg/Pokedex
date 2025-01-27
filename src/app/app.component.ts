import { Component, computed, inject, signal } from '@angular/core';
import { Pokemon, PokemonList } from './pokemon.model';
import { PokemonBorderDirective } from './pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  imports: [PokemonBorderDirective, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly #pokemonService = inject(PokemonService);
  readonly pokemonList = signal(this.#pokemonService.getpokemonList());
  readonly searchTerm = signal('');

  readonly pokemonListfiltered = computed(() => {
    const searchTerm = this.searchTerm();
    const pokemonList = this.pokemonList();

    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.trim().toLocaleLowerCase())
  )
  });

  size(pokemon: Pokemon) {
    if(pokemon.life <= 15) {
      return 'petit';
    }
    if(pokemon.life >= 25) {
      return'grand';
    }
    return'moyen';
  }

    incrlife(pokemon: Pokemon){
    pokemon.life = pokemon.life + 1;
  }

    decrlife(pokemon: Pokemon){
    pokemon.life = pokemon.life - 1;
  }
}
