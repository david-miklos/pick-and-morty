import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header flex h-16 flex-row justify-center border-b border-gray-200">
      <Link
        to="/"
        className="ml-auto flex h-full items-center font-extrabold text-gray-800 sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl"
      >
        Pick and Morty
      </Link>
      <div className="items-centre ml-auto flex">
        <Link
          to="/favourites"
          className="liked-button my-auto mr-10 flex h-2/3 items-center"
        >
          FAVOURITES
        </Link>
      </div>
    </div>
  );
};

export default Header;
