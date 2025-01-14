import { TeamName } from "@constants/teams";

export interface ILiveMatches {
  Equipe1: TeamName;
  GolsEquipe1: number;
  Equipe2: TeamName;
  GolsEquipe2: number;
  Status: string;
  Data: string;
}
