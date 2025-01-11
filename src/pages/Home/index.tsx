import { CardMatches } from "@components/CardMatches";
import { HeaderMenu } from "@components/HeaderMenu";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { useStyles } from "./styles";

export function HomePage() {
  const styles = useStyles();
  return (
    <>
      <HeaderMenu />
      <Stack sx={styles.container} spacing={4}>
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
    </>
  );
}
