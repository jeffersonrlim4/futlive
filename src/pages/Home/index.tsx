import { CardMatches } from "@components/CardMatches";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { RootLayout } from "@components/RootLayout";
import { NextMatches } from "@components/NextMatches";

export function HomePage() {
  return (
    <RootLayout>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h5">Partidas do dia</Typography>
          <Grid2 container spacing={2} mt={2}>
            <CardMatches />
            <CardMatches />
            <CardMatches />
          </Grid2>
        </Box>
        <Box>
          <Typography variant="h5">Próximas partidas</Typography>
          <Grid2 container spacing={2} mt={2}>
            <NextMatches Texto="Botafogo x São Paulo" />
            <NextMatches Texto="Bragantino x Criciúma" />
            <NextMatches Texto="Bahia x Atlético-GO" />
          </Grid2>
        </Box>
      </Stack>
    </RootLayout>
  );
}
