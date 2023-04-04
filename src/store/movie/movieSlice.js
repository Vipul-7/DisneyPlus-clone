import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommand: null,
  disneyPlusOriginals: null,
  bestOfTheSuperheros: null,
  talesFromJapan: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommand = action.payload.recommand;
      state.disneyPlusOriginals = action.payload.disneyPlusOriginals;
      state.bestOfTheSuperheros = action.payload.bestOfTheSuperheros;
      state.talesFromJapan = action.payload.talesFromJapan;
    },
  },
});

export const moviesAction = movieSlice.actions;
export default movieSlice;
