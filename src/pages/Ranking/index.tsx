import { RankingTable } from "@components/Tables/RankingTable";
import { RootLayout } from "@components/RootLayout";
import { Box, Stack, Typography } from "@mui/material";
import { useStyles } from "./styles";

export function RankingPage() {
  const styles = useStyles();

  return (
    <RootLayout>
      <Box>
        <Stack sx={styles.container} direction="row">
          <Typography variant="h4" sx={styles.title}>
            Artilharia
          </Typography>
        </Stack>
        <RankingTable />
      </Box>
    </RootLayout>
  );
}
