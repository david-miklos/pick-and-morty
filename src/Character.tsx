import { ICharacter } from "./interfaces";

const Character = (props: ICharacter) => {
  return (
    <div>
      <h1>{props.id}</h1>
      <h2>{props.name}</h2>
      <h2>{props.gender}</h2>
    </div>
  );
};

export default Character;
