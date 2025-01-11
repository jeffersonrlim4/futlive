import { Box, Stack, Typography, Link } from "@mui/material";
import { useStyles } from "./styles";

export function HeaderMenu() {
  const styles = useStyles();

  return (
    <Stack direction="row" sx={styles.container}>
      <Box>
        <Typography
          sx={{ fontSize: 26, color: "white", fontWeight: 700 }}
          component="h1"
        >
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
        <Link href="/details" sx={styles.link}>
          CAMPEONATOS
        </Link>
      </Stack>
    </Stack>
  );
}
