import { ICharacter } from "./interfaces";

const Character = (character: ICharacter) => {
  const { name, status, species, location, episode, url } = character;

  return (
    <article className="character-card">
      <img className="card-image" src={character.image} alt="the character" />
      <section className="card-content p-4 flex flex-col justify-around gap-y-6">
        <section>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-white text-2xl font-extrabold hover:text-orange-400"
          >
            {name}
          </a>
          <h3 className="text-white font-medium flex flex-row items-center">
            <div
              className={`status-icon ${
                status === "Alive"
                  ? "bg-green-500"
                  : status === "Dead"
                  ? "bg-red-500"
                  : "bg-gray-400"
              } `}
            ></div>
            {status} - {species}
          </h3>
        </section>
        <section>
          <h3 className="text-neutral-400 font-medium">Location:</h3>
          <a
            href={location.url}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-orange-400"
          >
            {location.name}
          </a>
        </section>
        <section>
          <h3 className="text-neutral-400 font-medium">Seen in:</h3>
          <h3 className="text-white ">{episode.length} episodes</h3>
        </section>
      </section>
    </article>
  );
};

export default Character;
