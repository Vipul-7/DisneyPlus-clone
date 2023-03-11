import { configureStore} from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: { user: userSlice.reducer },
  // middleware : getDefaultMiddleware({
  //     serializableCheck:false;
  // })
});

export default store;
