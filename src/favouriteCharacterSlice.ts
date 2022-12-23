import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "./interfaces";

export const favouriteCharactersSlice = createSlice({
  name: "favouriteCharacters",
  initialState: {
    value: [] as ICharacter[],
  },
  reducers: {
    add: (state, action: PayloadAction<ICharacter>) => {
      const isPresent = state.value
        .map((c) => c.id)
        .includes(action.payload.id);
      if (!isPresent) {
        state.value = [...state.value, action.payload];
      }
    },
    remove: (state, action: PayloadAction<ICharacter>) => {
      const characters = state.value.filter((c) => c.id !== action.payload.id);
      state.value = characters;
    },
  },
});

export const { add } = favouriteCharactersSlice.actions;
export const { remove } = favouriteCharactersSlice.actions;

export default favouriteCharactersSlice.reducer;
