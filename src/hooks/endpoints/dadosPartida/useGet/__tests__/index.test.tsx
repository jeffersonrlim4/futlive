import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DADOS_PARTIDA } from "@services/endpoints/dadosPartida";
import { useGetAllDadosPartida } from "../useGetAllDadosPartida";

jest.mock("@utils/env", () => ({
  env: {
    VITE_BASE_API_URL: "http://localhost:5173",
  },
}));

jest.mock("@services/endpoints/dadosPartida");

describe("useGetAllDadosPartida", () => {
  const queryClient = new QueryClient();

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("should return data when the request is successful", async () => {
    const mockData = { data: { Artilharia: [] } };
    (DADOS_PARTIDA.get as jest.Mock).mockResolvedValueOnce(mockData);

    const { result } = renderHook(() => useGetAllDadosPartida(), { wrapper });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockData);
    expect(DADOS_PARTIDA.get).toHaveBeenCalledTimes(1);
  });

  it("should handle errors correctly", async () => {
    (DADOS_PARTIDA.get as jest.Mock).mockRejectedValue(new Error("API Error"));

    const { result } = renderHook(() => useGetAllDadosPartida(), { wrapper });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(DADOS_PARTIDA.get).toHaveBeenCalledTimes(1);
  });
});
