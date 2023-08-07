import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices";
import storage from "redux-persist/lib/storage";
import { persistReducer , persistStore} from "redux-persist";
 
export * from "./slices";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
});  

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:persistedReducer,
});

export const persistedStore =  persistStore(store);