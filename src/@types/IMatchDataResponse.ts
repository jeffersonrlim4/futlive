import { IChampionshipStandings } from "./IChampionshipStandings";
import { IStatistic } from "./IStatistic";
import { INextMatches } from "./INextMatches";
import { ILiveMatches } from "./ILiveMatches";
import { ITopScore } from "./ITopScorer";

export interface IMatchDataResponse {
  Artilharia: ITopScore[];
  JogosDia: ILiveMatches[];
  Lances: IStatistic[];
  ListaPartidas: INextMatches[];
  ClassificacaoGrupo: IChampionshipStandings[];
}
