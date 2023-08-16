import { combineReducers, configureStore } from "@reduxjs/toolkit";
/* import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"; */
//import AsyncStorage from "@react-native-async-storage/async-storage";
import { authSlice } from "./auth/slice";
import { postsSlice } from "./posts/slice";

/* const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  //whitelist: ["token"],
}; */

/* const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }); */

//const reducer = persistReducer(persistConfig, rootReducer);

rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [postsSlice.name]: authSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  //middleware,
});

//const persistor = persistStore(store);

export { store /*persistor*/ };
