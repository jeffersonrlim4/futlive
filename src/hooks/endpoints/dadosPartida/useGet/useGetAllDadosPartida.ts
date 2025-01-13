import { DADOS_PARTIDA } from "@services/endpoints/dadosPartida";
import { useQuery } from "@tanstack/react-query";
import { IMatchDataResponse } from "src/@types/IMatchDataResponse";

export const useGetAllDadosPartida = () => {
  const { get } = DADOS_PARTIDA;

  return useQuery({
    queryFn: async () => {
      const requests = await get<IMatchDataResponse>({ params: { teste: 1 } });
      return requests;
    },
    queryKey: ["scout", "dadosPartida"],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
