import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import movieSlice from "./movie/movieSlice";

const store = configureStore({
  reducer: { user: userSlice.reducer, movie: movieSlice.reducer },
  // middleware : getDefaultMiddleware({
  //     serializableCheck:false;
  // })
});

export default store;
