import Character from "./Character";
import { ICharacter } from "../interfaces";
import NotFound from "./NotFound";

const Results = ({ results }: { results: ICharacter[] }) => {
  if (!results.length) {
    return <NotFound />;
  }
  return (
    <ul className="results grid gap-5 sm:col-span-1 sm:grid-cols-1 md:col-span-2 md:grid-cols-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-3 xl:grid-cols-3 2xl:col-span-4 2xl:grid-cols-4">
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
