import { FC } from "react";
import { pokemonApi } from "../services/pokemonService";
import PokemonAbility from "./PokemonAbility";
import Loader from "./Loader";

const PokemonCard: FC<PokemonCardProps> = ({ name }) => {
  const {
    data: poks,
    isFetching,
    isSuccess,
  } = pokemonApi.useGetPokemonByNameQuery(name);

  return !isFetching && isSuccess ? (
    <div
      className={`flex-1 flex flex-col items-center border-2 border-yellow-500 p-6 max-w-[500px] min-h-[610px] justify-between h-fit gap-2 text-gray-900 bg-cyan-500 bg-opacity-70 `}
    >
      <div className="font-bold text-xl ">Detail info</div>
      <div className="w-1/2 h-auto">
        <img
          src={poks.sprites.front_shiny}
          loading="lazy"
          alt="pokemonImg"
          className="w-full"
        />
      </div>
      <div className=" font-bold text-xl">{poks.name}</div>
      <div className="flex flex-col gap-4 border-2 border-yellow-500 p-2 w-full text-gray-900">
        <div className="flex flex-col w-full ">
          <div className="font-semibold text-lg  flex items-center justify-center text-gray-900">
            Characteristics:
          </div>
          <div className="flex justify-between ">
            <span>Height:</span>
            <span>{poks.height}</span>
          </div>
          <div className="flex justify-between ">
            <span>Weight:</span>
            <span>{poks.weight}</span>
          </div>
          <div className="flex justify-between ">
            <span>Base Experience:</span>
            <span>{poks.base_experience}</span>
          </div>
          <div className="flex justify-between">
            <span>Order:</span>
            <span>{poks.order}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex font-semibold text-lg  w-full justify-center items-center text-gray-900">
            Abilities:
          </div>
          {poks.abilities.map((ability, index) => (
            <PokemonAbility key={index} name={ability.ability.name} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default PokemonCard;

interface PokemonCardProps {
  name: string;
}
