import { RankingTable } from "@components/@tables/RankingTable";
import { RootLayout } from "@components/RootLayout";
import { Box, Stack, Typography } from "@mui/material";
import { useStyles } from "./styles";

export function RankingPage() {
  const styles = useStyles();

  return (
    <RootLayout>
      <Box>
        <Stack sx={styles.container} direction="row">
          <Typography variant="h4">Artilharia</Typography>
        </Stack>
        <RankingTable />
      </Box>
    </RootLayout>
  );
}
