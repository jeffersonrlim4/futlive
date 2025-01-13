import { CardMatches } from "@components/CardMatches";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { RootLayout } from "@components/RootLayout";
import { NextMatches } from "@components/NextMatches";
import { useGetAllDadosPartida } from "@hooks/endpoints/dadosPartida/useGet/useGetAllDadosPartida";
import { ITodayGames } from "src/@types/ITodayGames";
import { INextMatches } from "src/@types/INextMatches";

export function HomePage() {
  const { data: dadosPartida } = useGetAllDadosPartida();

  return (
    <RootLayout>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h5">Partidas do dia</Typography>
          <Grid2 container spacing={2} mt={2}>
            {dadosPartida?.data.JogosDia.map((todayGames: ITodayGames) => (
              <CardMatches key={todayGames.Equipe1} data={todayGames} />
            ))}
          </Grid2>
        </Box>
        <Box>
          <Typography variant="h5">Próximas partidas</Typography>
          <Grid2 container spacing={2} mt={2}>
            {dadosPartida?.data.ListaPartidas.map((nextMatch: INextMatches) => (
              <NextMatches key={nextMatch.Codigo} data={nextMatch} />
            ))}
          </Grid2>
        </Box>
      </Stack>
    </RootLayout>
  );
}
