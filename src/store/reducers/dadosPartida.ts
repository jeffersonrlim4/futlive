import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Artilharia: [],
  JogosDia: [],
  Lances: [],
  ListaPartidas: [],
  ClassificacaoGrupo: [],
};

const dadosPartidaSlice = createSlice({
  name: "dadosPartida",
  initialState,
  reducers: {
    updateArtilharia(state, action) {
      state.Artilharia = action.payload;
    },
    updateJogosDia(state, action) {
      state.JogosDia = action.payload;
    },
    updateLances(state, action) {
      state.Lances = action.payload;
    },
    updateListaPartidas(state, action) {
      state.ListaPartidas = action.payload;
    },
    updateClassificacaoGrupo(state, action) {
      state.ClassificacaoGrupo = action.payload;
    },
  },
});

export const dadosPartidaSliceReducer = dadosPartidaSlice.reducer;

export const {
  updateArtilharia,
  updateClassificacaoGrupo,
  updateJogosDia,
  updateLances,
  updateListaPartidas,
} = dadosPartidaSlice.actions;
