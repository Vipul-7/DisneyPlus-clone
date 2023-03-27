import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommand: null,
  disneyPlusOriginals: null,
  twistInTheTale: null,
  animatedAdventures: null,
  latestOnDisneyPlus: null,
  behindTheScenes: null,
  attackOfAnime: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommand = action.payload.recommand;
      state.disneyPlusOriginals = action.payload.disneyPlusOriginals;
      state.twistInTheTale = action.payload.twistInTheTale;
      state.animatedAdventures = action.payload.animatedAdventures;
      state.latestOnDisneyPlus = action.payload.latestOnDisneyPlus;
      state.behindTheScenes = action.payload.behindTheScenes;
      state.attackOfAnime = action.payload.attackOfAnime;
    },
  },
});

export const moviesAction = movieSlice.actions;
export default movieSlice;
