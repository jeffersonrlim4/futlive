import { useStyles } from "@components/HeaderMenu/styles";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function DesktopMenu() {
  const styles = useStyles();
  return (
    <Stack direction="row" gap={4} data-testid="desktop-menu">
      <Link to="/" style={styles.link}>
        <Typography sx={styles.linkText}>JOGOS</Typography>
      </Link>
      <Link to="/ranking" style={styles.link}>
        <Typography sx={styles.linkText}>RANKING</Typography>
      </Link>
      <Link to="/campeonato" style={styles.link}>
        <Typography sx={styles.linkText}>CAMPEONATOS</Typography>
      </Link>
    </Stack>
  );
}
