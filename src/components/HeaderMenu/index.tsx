import { Box, Stack, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";

export function HeaderMenu() {
  const styles = useStyles();

  return (
    <Stack direction="row" sx={styles.container}>
      <Box>
        <Link to="/" style={styles.logo}>
          FUTLIVE
        </Link>
      </Box>
      <Stack direction="row" gap={4}>
        <Link to="/" style={styles.link}>
          <Typography sx={styles.linkText}>PARTIDAS</Typography>
        </Link>
        <Link to="/ranking" style={styles.link}>
          <Typography sx={styles.linkText}>RANKING</Typography>
        </Link>
        <Link to="/campeonato" style={styles.link}>
          <Typography sx={styles.linkText}>CAMPEONATOS</Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
