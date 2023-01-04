import { ICharacter } from "./interfaces";
import Heart from "./assets/favorite-96.png";
import Remove from "./assets/cancel-96.svg";
import { useDispatch } from "react-redux";
import { add } from "./favouriteCharacterSlice";
import { remove } from "./favouriteCharacterSlice";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "./store";
const favouritesPath = "/favourites";

const Character = (character: ICharacter) => {
  const { name, status, species, location, episode, url } = character;
  const { pathname } = useLocation();
  const favouriteCharacters = useSelector(
    (state: RootState) => state.favouriteCharacters.value
  );

  const notify = (message: string) => {
    toast.success(`${message}`, {
      position: "bottom-center",
      pauseOnHover: false,
      autoClose: 1000,
    });
  };

  const handleCharacterAction = () => {
    if (pathname === favouritesPath) {
      dispatch(remove(character));
    } else {
      dispatch(add(character));
      const isPresent = favouriteCharacters
        .map((c) => c.id)
        .includes(character.id);
      if (!isPresent) notify("Successfully added to favourites");
    }
  };

  const dispatch = useDispatch();

  return (
    <article className="character-card w-full h-full">
      <img
        className="card-image w-2/5"
        src={character.image}
        alt="the character"
      />
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

      <button
        onClick={handleCharacterAction}
        className="flex flex-column items-end ml-auto mb-3 mr-4"
      >
        {pathname === favouritesPath ? (
          <img src={Remove} alt="remove" className="w-8 h-8" />
        ) : (
          <img src={Heart} alt="green heart" className="w-8 h-8" />
        )}
      </button>
      <ToastContainer />
    </article>
  );
};

export default Character;
