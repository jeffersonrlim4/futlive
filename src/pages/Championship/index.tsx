import { ChampionshipTable } from "@components/@tables/ChampionshipTable";
import { RootLayout } from "@components/RootLayout";
import { Box, Stack, Typography } from "@mui/material";

export function ChampionshipPage() {
  return (
    <RootLayout>
      <Box>
        <Stack sx={{ justifyContent: "center", padding: 4 }} direction="row">
          <Typography variant="h4">Campeonato Brasileiro A</Typography>
        </Stack>
        <ChampionshipTable />
      </Box>
    </RootLayout>
  );
}
