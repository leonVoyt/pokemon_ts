import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAbility, IPokemon, IPokemonInfo } from "../models/IPokemon";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getPokemonByName: builder.query<IPokemonInfo, string>({
      query: (name) => `/pokemon/${name}`,
      providesTags: () => ["Pokemon"],
    }),
    getAllPokemons: builder.query<IPokemon, number>({
      query: (limit) => ({
        url: `/pokemon/`, // Provide the URL here
        params: {
          limit: limit,
        },
      }),
      providesTags: () => ["Pokemon"],
    }),
    getPokemonAbilityTranslate: builder.query<IAbility, string>({
      query: (name) => `/ability/${name}`,
      providesTags: () => ["Pokemon"],
    }),
  }),
});
export const { useGetPokemonByNameQuery } = pokemonApi;
