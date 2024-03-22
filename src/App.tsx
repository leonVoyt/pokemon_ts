import { Suspense, useState } from "react";

import { pokemonApi } from "./services/pokemonService";
import DefaultPokemonCard from "./components/DefaultPokemonCard";
import PokemonCard from "./components/PokemonCard";
import Loader from "./components/Loader";
const App = () => {
  const [limit, setLimit] = useState(30);
  const { data: allPokemons, isFetching } =
    pokemonApi.useGetAllPokemonsQuery(limit);
  const [isVisible, setIsVisible] = useState(false);
  const [detailUrl, setDetailUrl] = useState("1");

  const handleClick = (name: string) => {
    setDetailUrl(name);
    setIsVisible(true);
  };
  return !isFetching ? (
    <div className="flex w-full flex-col items-center p-4 sm:p-10 gap-4 bg-hero-pattern bg-no-repeat bg-center bg-fixed bg-contain lg:bg-cover">
      <select
        className="border-2 border-yellow-500 w-20 h-fit"
        onChange={(e) => setLimit(Number(e.target.value))}
        value={limit}
      >
        <option className="" value={30}>
          30
        </option>
        <option className="" value={10}>
          10
        </option>
      </select>
      <div className="text-yellow-500 flex flex-row gap-4  justify-between">
        <div className="flex gap-4 flex-wrap w-5/12 sm:w-6/12 items-center justify-center">
          {allPokemons?.results.map((pokemon, index: number) => {
            return (
              <span onClick={() => handleClick(pokemon.name)} key={index}>
                <DefaultPokemonCard name={pokemon.name} />
              </span>
            );
          })}
        </div>

        <div className="w-7/12 sm:w-5/12 flex justify-center relative">
          {isVisible && (
            <Suspense fallback={<>dffsdf</>}>
              <PokemonCard name={detailUrl} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default App;
