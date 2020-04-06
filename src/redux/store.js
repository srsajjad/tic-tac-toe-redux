// redux imports
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { tictacSlice } from "./tictacSlice";

// redux store configuration
const reducer = combineReducers({
  tictac: tictacSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["tictac"],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

let persistor = persistStore(store);

export { store, persistor };
