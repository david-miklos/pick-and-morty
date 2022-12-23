import { useSelector } from "react-redux";
import Character from "./Character";
import { RootState } from "./store";

const Favourites = () => {
  const favouriteCharacters = useSelector(
    (state: RootState) => state.favouriteCharacters.value
  );

  return (
    <div>
      <ul className="favourites mx-auto my-12 col-span-5 grid gap-5 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-1 w-11/12">
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
