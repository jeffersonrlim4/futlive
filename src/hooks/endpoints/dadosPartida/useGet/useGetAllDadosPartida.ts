import { DADOS_PARTIDA } from "@services/endpoints/dadosPartida";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useGetAllDadosPartida = () => {
  const { get } = DADOS_PARTIDA;

  return useQuery({
    queryFn: async (): Promise<AxiosResponse> => {
      const requests = await get();
      return requests;
    },
    queryKey: ["scout", "dadosPartida"],
    refetchOnWindowFocus: false,
    retry: 3,
  });
};
