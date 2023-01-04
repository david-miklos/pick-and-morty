import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchCharacters from "../apis/fetchCharacters";
import { GENDERS, IFilterObj, STATUSES } from "../interfaces";
import Loader from "./Loader";
import Results from "./Results";

const FilterBox = () => {
  const [filter, setFilter] = useState({} as IFilterObj);
  const [page, setPage] = useState(1);

  // React Query
  const results = useQuery(["search", filter], fetchCharacters);

  if (results.isLoading) {
    return <Loader />;
  }

  const maxPages = results.data?.data.info?.pages;
  const characters = results.data?.data.results ?? [];

  return (
    <div className="filter-box m-12 grid gap-20 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <form
        className="col-span-1"
        onSubmit={(e) => {
          e.preventDefault();
          // Getting the data from the from
          const formData = new FormData(e.currentTarget);
          const filterObj = Object.fromEntries(formData.entries());
          setPage(1);
          setFilter(filterObj);
        }}
      >
        <div className="sticky top-10 mb-6 grid grid-cols-1 gap-6">
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
          <div className="mt-5 flex flex-col items-center">
            <button className="submit-button w-1/3">Search</button>
          </div>
        </div>
      </form>
      <Results results={characters} />

      <div className="pagination col-span-full mx-auto flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {page}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {maxPages}
            </span>{" "}
            Pages
          </span>

          <div className="xs:mt-0 mt-4 flex flex-row gap-5">
            <button
              disabled={page === 1 ? true : false}
              onClick={() => {
                setPage(page - 1);
                setFilter({ ...filter, ...{ page: page - 1 } });
              }}
              className="pagination-button rounded-l-lg"
            >
              Prev
            </button>
            <button
              disabled={page === maxPages ? true : false}
              onClick={() => {
                setPage(page + 1);
                setFilter({ ...filter, ...{ page: page + 1 } });
              }}
              className="pagination-button rounded-r-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
