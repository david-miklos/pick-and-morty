import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header border-b flex flex-row justify-center border-gray-200 h-16">
      <Link
        to="/"
        className="flex h-full items-center ml-auto text-4xl font-extrabold text-gray-800"
      >
        Pick and Morty
      </Link>
      <div className="flex items-centre ml-auto">
        <Link
          to="/favourites"
          className="liked-button flex items-center h-2/3 my-auto mr-10"
        >
          FAVOURITES
        </Link>
      </div>
    </div>
  );
};

export default Header;
