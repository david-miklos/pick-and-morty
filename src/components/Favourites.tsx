import { useSelector } from "react-redux";
import Character from "./Character";
import { RootState } from "../store";

const Favourites = () => {
  const favouriteCharacters = useSelector(
    (state: RootState) => state.favouriteCharacters.value
  );

  return (
    <div>
      <ul className="favourites mx-auto my-12 grid gap-5 w-11/12 2xl:grid-cols-5 2xl:col-span-5 xl:grid-cols-4 xl:col-span-4 lg:grid-cols-3 lg:col-span-3 md:grid-cols-2 md:col-span-2 sm:grid-cols-1 sm:col-span-1">
        {favouriteCharacters.map((character) => {
          return (
            <li key={character.id}>
              <Character {...character} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favourites;
