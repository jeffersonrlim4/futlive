export interface IClassification {
  Posicao: number;
  Equipe: string;
  Pontos: number;
  Jogos: number;
  Vitorias: number;
  Empates: number;
  Derrotas: number;
  GolsPro: number;
  GolsContra: number;
  SaldoGols: number;
  CartoesAmarelos: number;
  CartoesVermelhos: number;
  Aproveitamento: string;
  Movimentacao: string | null;
  MediaPontos: number;
}
