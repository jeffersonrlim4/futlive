import { api } from "@services/index";
import { axiosConfig } from "@services/methods/api.interface";

export const DADOS_PARTIDA = axiosConfig(api, "/dadosPartida");
