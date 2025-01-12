import { Box, Stack, Typography, Link } from "@mui/material";
import { useStyles } from "./styles";

export function HeaderMenu() {
  const styles = useStyles();

  return (
    <Stack direction="row" sx={styles.container}>
      <Box>
        <Typography href="/" sx={styles.logo} component="a">
          FUTLIVE
        </Typography>
      </Box>
      <Stack direction="row" gap={4}>
        <Link href="/" sx={styles.link}>
          PARTIDAS
        </Link>
        <Link href="/ranking" sx={styles.link}>
          RANKING
        </Link>
        <Link href="/campeonato" sx={styles.link}>
          CAMPEONATOS
        </Link>
      </Stack>
    </Stack>
  );
}
