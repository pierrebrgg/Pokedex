import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-profile',
  imports: [RouterLink, DatePipe],
  templateUrl: './pokemon-profile.component.html',
  styles: ``
})
export class PokemonProfileComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly pokemonService = inject(PokemonService);

  private readonly pokemonId = Number(this.route.snapshot.paramMap.get('id'));

  readonly pokemon = signal(
    this.pokemonService.getPokemonbyId(this.pokemonId)
  );
}
