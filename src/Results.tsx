import Character from "./Character";
import { ICharacter } from "./interfaces";
import NotFound from "./NotFound";

const Results = ({ results }: { results: ICharacter[] }) => {
  if (!results.length) {
    return <NotFound />;
  }
  return (
    <div className="results col-span-2 grid gap-5 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 h-1/2">
      {results.map((character) => {
        return <Character {...character} key={character.id} />;
      })}
    </div>
  );
};

export default Results;
