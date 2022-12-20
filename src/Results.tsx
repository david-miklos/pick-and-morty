import Character from "./Character";
import { ICharacter } from "./interfaces";

const Results = ({ results }: { results: ICharacter[] }) => {
  return (
    <div className="results col-span-2 grid gap-5 grid-cols-3 h-1/2">
      {results.map((character) => {
        return <Character {...character} key={character.id} />;
      })}
    </div>
  );
};

export default Results;
