import Character from "./Character";
import { ICharacter } from "../interfaces";
import NotFound from "./NotFound";

const Results = ({ results }: { results: ICharacter[] }) => {
  if (!results.length) {
    return <NotFound />;
  }
  return (
    <ul className="results grid gap-5 2xl:grid-cols-4 2xl:col-span-4 xl:grid-cols-3 xl:col-span-3 lg:grid-cols-2 lg:col-span-2 md:grid-cols-2 md:col-span-2 sm:grid-cols-1 sm:col-span-1">
      {results.map((character) => {
        return (
          <li key={character.id}>
            <Character {...character} />
          </li>
        );
      })}
    </ul>
  );
};

export default Results;
