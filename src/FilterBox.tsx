import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchCharacters from "./fetchCharacters";
import { GENDERS, IFilterObj, STATUSES } from "./interfaces";
import Loader from "./Loader";
import Results from "./Results";

const FilterBox = () => {
  // const [name, setName] = useState("");
  // const [status, setStatus] = useState("" as Status);
  // const [species, setSpecies] = useState("");
  // const [type, setType] = useState("");
  // const [gender, setGender] = useState("" as Gender);
  const [filter, setFilter] = useState({} as IFilterObj);

  // React Query
  const results = useQuery(["search", filter], fetchCharacters);

  if (results.isLoading) {
    return <Loader />;
  }

  const characters = results.data?.data.results ?? [];

  return (
    <div className="filter-box m-10 grid gap-20 grid-cols-3">
      <form
        className="col-span-1"
        onSubmit={(e) => {
          e.preventDefault();
          // Getting the data from the from
          const formData = new FormData(e.currentTarget);
          const filterObj = Object.fromEntries(formData.entries());

          setFilter(filterObj);
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
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="status">
            <label htmlFor="status" className="search-label">
              Status
            </label>
            <select id="status" className="search-select" name="status">
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
              name="species"
              placeholder="Species"
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
              name="type"
              placeholder="Type"
            />
          </div>
          <div className="gender">
            <label htmlFor="gender" className="search-label">
              Gender
            </label>
            <select id="gender" className="search-select" name="gender">
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
