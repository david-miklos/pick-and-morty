import Character from "./Character";
import { ICharacter } from "./interfaces";
import NotFound from "./NotFound";

const Results = ({ results }: { results: ICharacter[] }) => {
  if (!results.length) {
    return <NotFound />;
  }
  return (
    <div className="results grid gap-5 2xl:grid-cols-4 2xl:col-span-4 xl:grid-cols-3 xl:col-span-3 lg:grid-cols-2 lg:col-span-2 md:grid-cols-2 sm:grid-cols-1">
      {results.map((character) => {
        return <Character {...character} key={character.id} />;
      })}
    </div>
  );
};

export default Results;
