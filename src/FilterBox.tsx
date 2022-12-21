import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchCharacters from "./fetchCharacters";
import { Gender, GENDERS, IFilterObj, Status, STATUSES } from "./interfaces";
import Loader from "./Loader";
import Results from "./Results";

const FilterBox = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("" as Status);
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("" as Gender);
  const [filter, setFilter] = useState({} as IFilterObj);

  // React Query
  const results = useQuery(["search", filter], fetchCharacters);

  if (results.isLoading) {
    return <Loader />;
  }

  console.log(results);
  const characters = results.data?.data.results ?? [];

  return (
    <div className="filter-box m-10 grid gap-20 grid-cols-3">
      <form
        className="col-span-1"
        onSubmit={(e) => {
          e.preventDefault();
          // Request characters on submit events
          // void requestCharacters();
          const filter: IFilterObj = {};
          if (name) filter.name = name;
          if (status) filter.status = status;
          if (species) filter.species = species;
          if (type) filter.type = type;
          if (gender) filter.gender = gender;
          setFilter(filter);
        }}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div className="name">
            <label className="search-label" htmlFor="name">
              Name
            </label>
            <input
              className="search-input"
              type="text"
              id="name"
              name="Name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="status">
            <label htmlFor="status" className="search-label">
              Status
            </label>
            <select
              id="status"
              className="search-select"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value as Status);
              }}
            >
              <option value={""}>Choose a status</option>
              {STATUSES.map((status) => {
                return (
                  <option value={status} key={status}>
                    {status}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="species">
            <label className="search-label" htmlFor="species">
              Species
            </label>
            <input
              className="search-input"
              type="text"
              id="species"
              name="Species"
              value={species}
              placeholder="Species"
              onChange={(e) => setSpecies(e.target.value)}
            />
          </div>
          <div className="type">
            <label className="search-label" htmlFor="type">
              Type
            </label>
            <input
              className="search-input"
              type="text"
              id="type"
              name="Type"
              value={type}
              placeholder="Type"
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="gender">
            <label htmlFor="gender" className="search-label">
              Gender
            </label>
            <select
              id="gender"
              className="search-select"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value as Gender);
              }}
            >
              <option value={""}>Choose a gender</option>
              {GENDERS.map((gender) => {
                return (
                  <option value={gender} key={gender}>
                    {gender}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col items-center mt-5">
            <button className="submit-button w-1/3">Search</button>
          </div>
        </div>
      </form>
      <Results results={characters} />
    </div>
  );
};

export default FilterBox;
