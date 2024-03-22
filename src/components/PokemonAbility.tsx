import { FC, useEffect, useState } from "react";
import { pokemonApi } from "../services/pokemonService";
import Loader from "./Loader";

const PokemonAbility: FC<PokemonAbilityProps> = ({ name }) => {
  const { data, isFetching } =
    pokemonApi.useGetPokemonAbilityTranslateQuery(name);
  const [translate, setTranslate] = useState(name);

  useEffect(() => {
    setTranslate(name);
  }, [name]);
  return !isFetching ? (
    <div className="flex w-full justify-between flex-wrap ">
      {translate}
      <select
        className="border-2 border-yellow-500 w-2/3"
        onChange={(e) => setTranslate(e.target.value)}
      >
        <option className="" value={name}>
          en:{name}
        </option>
        {data?.names.map((ability) => (
          <option value={ability.name} key={ability.language.name}>
            {ability.language.name}:{ability.name}
          </option>
        ))}
      </select>
    </div>
  ) : (
    <>...</>
  );
};
export default PokemonAbility;

interface PokemonAbilityProps {
  name: string;
}
