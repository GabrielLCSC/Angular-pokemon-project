import { Component, OnInit } from '@angular/core';
// import { POKEMONS } from './mock-pokemon-list';
// import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  
  // pokemonList: Pokemon[] = POKEMONS;
  // pokemonSelected: Pokemon|undefined;

  // ngOnInit() {
  //   console.table(this.pokemonList);
  // }

  // selectPokemon(pokemonId: string) {
  //   const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);

  //   if (pokemon) {
  //     console.log(`Vous avez choisi ${pokemon.name}`);
  //     this.pokemonSelected = pokemon;
  //   } else {
  //     console.log(`Le pokemon n'existe pas`); 
  //     this.pokemonSelected = pokemon;
  //   }
  // }
}
