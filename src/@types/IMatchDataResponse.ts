import { IChampionshipStandings } from "./IChampionshipStandings";
import { ILances } from "./ILances";
import { INextMatches } from "./INextMatches";
import { ITodayGames } from "./ITodayGames";
import { ITopScore } from "./ITopScorer";

export interface IMatchDataResponse {
  Artilharia: ITopScore[];
  JogosDia: ITodayGames[];
  Lances: ILances[];
  ListaPartidas: INextMatches[];
  ClassificacaoGrupo: IChampionshipStandings[];
}
