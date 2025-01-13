import { configureStore } from "@reduxjs/toolkit";
import { dadosPartidaSliceReducer } from "./reducers/dadosPartida";

const store = configureStore({
  reducer: {
    dadosPartida: dadosPartidaSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
