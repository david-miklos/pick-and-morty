import { configureStore } from "@reduxjs/toolkit";
import favouriteCharacters from "./slices/favouriteCharacterSlice";

const store = configureStore({
  reducer: {
    favouriteCharacters,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
