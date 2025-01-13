import { configureStore } from "@reduxjs/toolkit";
import { dadosPartidaSliceReducer } from "./reducers/dadosPartida";
import { detailsMatchSliceReducer } from "./reducers/detailsMatch";

const store = configureStore({
  reducer: {
    dadosPartida: dadosPartidaSliceReducer,
    detailsMatch: detailsMatchSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
