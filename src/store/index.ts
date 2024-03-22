import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../services/pokemonService";

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
