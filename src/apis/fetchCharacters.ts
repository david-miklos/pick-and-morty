import { QueryFunction } from "@tanstack/react-query";
import { getCharacters } from "rickmortyapi";
import { ApiResponse, Character, Info } from "rickmortyapi/dist/interfaces";
import { IFilterObj } from "../interfaces";

const fetchCharacters: QueryFunction<
  ApiResponse<Info<Character[]>>,
  ["search", IFilterObj]
> = async ({ queryKey }) => {
  const filter = queryKey[1];
  const res = await getCharacters(filter);

  if (res.status === 404) {
    throw new Error(`no characters found`);
  }

  return res;
};

export default fetchCharacters;
