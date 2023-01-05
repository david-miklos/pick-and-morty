import { useSelector } from "react-redux";
import Character from "./Character";
import { RootState } from "../store";

const Favourites = () => {
  const favouriteCharacters = useSelector(
    (state: RootState) => state.favouriteCharacters.value
  );
  if (!favouriteCharacters.length) {
    return (
      <div className="flex h-screen flex-col items-center justify-center text-lg font-bold text-gray-800 md:text-xl lg:text-2xl xl:text-3xl">
        <div className="rounded-lg bg-gray-200 p-10">
          No characters in favourites.
        </div>
      </div>
    );
  }
  return (
    <div>
      <ul className="favourites mx-auto my-12 grid w-11/12 gap-5 sm:col-span-1 sm:grid-cols-1 md:col-span-2 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3 xl:col-span-4 xl:grid-cols-4 2xl:col-span-5 2xl:grid-cols-5">
        {favouriteCharacters.map((character) => {
          return (
            <li key={character.id}>
              <Character character={character} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favourites;
