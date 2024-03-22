export interface IPokemon {
  results: Array<PokemonDefaultProperty>;
}

export interface IPokemonInfo {
  abilities: Array<Abilities>;
  sprites: Sprites;
  height: number;
  name: string;
  order: number;
  weight: number;
  base_experience: number;
}
interface Sprites {
  front_shiny: string;
}
interface Abilities {
  ability: PokemonDefaultProperty;
}
interface PokemonDefaultProperty {
  name: string;
  url: string;
}

export interface IAbility {
  names: Array<Language>;
}
interface Language {
  name: string;
  language: PokemonDefaultProperty;
}
