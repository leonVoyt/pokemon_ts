import { FC } from "react";

const DefaultPokemonCard: FC<DefaultPokemonCardProps> = ({ name }) => {
  return (
    <div className="flex border-2 border-yellow-500 cursor-pointer w-20 h-96 l sm:w-96 max-w-40 max-h-52 items-center justify-center  text-gray-900 bg-cyan-500 bg-opacity-50 ">
      {name}
    </div>
  );
};
export default DefaultPokemonCard;

interface DefaultPokemonCardProps {
  name: string;
}
