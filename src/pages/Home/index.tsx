import { CardLiveMatches } from "@components/Cards/CardLiveMatches";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { RootLayout } from "@components/RootLayout";
import { CardNextMatches } from "@components/Cards/CardNextMatches";
import { useGetAllDadosPartida } from "@hooks/endpoints/dadosPartida/useGet/useGetAllDadosPartida";
import { ILiveMatches } from "src/@types/ILiveMatches";
import { INextMatches } from "src/@types/INextMatches";
import { CardSkeleton } from "@components/Skeletons/CardSkeleton";

export function HomePage() {
  const { data: dadosPartida, isLoading } = useGetAllDadosPartida();

  return (
    <RootLayout>
      <Stack spacing={4}>
        {/*TODO: Criar componente LiveMatchContainer*/}
        <Box>
          <Typography variant="h5">Partidas ao vivo</Typography>
          <Grid2 container spacing={2} mt={2}>
            {isLoading && <CardSkeleton />}
            {dadosPartida?.data.JogosDia.map((liveMatch: ILiveMatches) => (
              <CardLiveMatches
                key={liveMatch.Equipe1}
                data={{ ...liveMatch, Status: "Ao vivo" }}
              />
            ))}
          </Grid2>
        </Box>
        {/*TODO: Criar componente NextMatchContainer*/}
        <Box>
          <Typography variant="h5">Partidas do dia</Typography>
          <Grid2 container spacing={2} mt={2}>
            {isLoading && <CardSkeleton />}
            {dadosPartida?.data.ListaPartidas.map((nextMatch: INextMatches) => (
              <CardNextMatches key={nextMatch.Codigo} data={nextMatch} />
            ))}
          </Grid2>
        </Box>
      </Stack>
    </RootLayout>
  );
}
