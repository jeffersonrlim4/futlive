import { ChampionshipTable } from "@components/@tables/ChampionshipTable";
import { RootLayout } from "@components/RootLayout";
import { Box, Stack, Typography } from "@mui/material";
import { useStyles } from "./styles";

export function ChampionshipPage() {
  const styles = useStyles();

  return (
    <RootLayout>
      <Box>
        <Stack sx={styles.container} direction="row">
          <Typography variant="h4">Campeonato Brasileiro A</Typography>
        </Stack>
        <ChampionshipTable />
      </Box>
    </RootLayout>
  );
}
