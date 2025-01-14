import { IChampionshipStandings } from "./IChampionshipStandings";
import { ILances } from "./ILances";
import { INextMatches } from "./INextMatches";
import { ILiveMatches } from "./ILiveMatches";
import { ITopScore } from "./ITopScorer";

export interface IMatchDataResponse {
  Artilharia: ITopScore[];
  JogosDia: ILiveMatches[];
  Lances: ILances[];
  ListaPartidas: INextMatches[];
  ClassificacaoGrupo: IChampionshipStandings[];
}
