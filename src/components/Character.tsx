import { ICharacter } from "../interfaces";
import Heart from "../assets/favorite-96.png";
import Remove from "../assets/cancel-96.svg";
import { useDispatch } from "react-redux";
import { add } from "../slices/favouriteCharacterSlice";
import { remove } from "../slices/favouriteCharacterSlice";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../store";
const favouritesPath = "/favourites";

const Character = ({ character }: { character: ICharacter }) => {
  const { name, status, species, location, episode, url, image } = character;
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
    <article className="character-card h-full w-full">
      <img className="card-image w-2/5" src={image} alt="the character" />
      <section className="card-content flex flex-col justify-around gap-y-6 p-4">
        <section>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-extrabold text-white hover:text-orange-400"
          >
            {name}
          </a>
          <h3 className="flex flex-row items-center font-medium text-white">
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
          <h3 className="font-medium text-neutral-400">Location:</h3>
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
          <h3 className="font-medium text-neutral-400">Seen in:</h3>
          <h3 className="text-white ">{episode.length} episodes</h3>
        </section>
      </section>

      <button
        onClick={handleCharacterAction}
        className="flex-column ml-auto mb-3 mr-4 flex items-end"
      >
        {pathname === favouritesPath ? (
          <img src={Remove} alt="remove" className="h-8 w-8" />
        ) : (
          <img src={Heart} alt="green heart" className="h-8 w-8" />
        )}
      </button>
      <ToastContainer />
    </article>
  );
};

export default Character;
