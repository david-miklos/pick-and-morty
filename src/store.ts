import { configureStore } from "@reduxjs/toolkit";
import favouriteCharacters from "./favouriteCharacterSlice";

const store = configureStore({
  reducer: {
    favouriteCharacters,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
