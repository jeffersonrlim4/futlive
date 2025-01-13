import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTeam: {
    Equipe1: "Botafogo",
    GolsEquipe1: 2,
    Equipe2: "São Paulo",
    GolsEquipe2: 1,
    Status: "Encerrado",
    Data: "08/12/2024",
  },
};

const detailsMatchSlice = createSlice({
  name: "detailsMatch",
  initialState,
  reducers: {
    updateDetailsMatch(state, action) {
      state.selectedTeam = { ...action.payload };
    },
  },
});

export const detailsMatchSliceReducer = detailsMatchSlice.reducer;

export const { updateDetailsMatch } = detailsMatchSlice.actions;
