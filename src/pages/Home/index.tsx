import { CardMatches } from "@components/CardMatches";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { RootLayout } from "@components/RootLayout";

export function HomePage() {
  return (
    <RootLayout>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h5">Partidas do Dia</Typography>
          <Grid2 container spacing={2} mt={2}>
            <CardMatches />
            <CardMatches />
            <CardMatches />
          </Grid2>
        </Box>
        <Box>
          <Typography variant="h5">Partidas Finalizadas</Typography>
          <Grid2 container spacing={2} mt={2}>
            <CardMatches />
            <CardMatches />
            <CardMatches />
          </Grid2>
        </Box>
      </Stack>
    </RootLayout>
  );
}
