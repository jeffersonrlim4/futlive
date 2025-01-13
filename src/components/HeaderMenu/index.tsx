import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "@mui/icons-material";

export function HeaderMenu() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Stack direction="row" sx={styles.container}>
        <Box>
          <Link to="/" style={styles.logo}>
            FUTLIVE
          </Link>
        </Box>
        <IconButton onClick={toggleDrawer(true)} sx={styles.btnResponsive}>
          <Menu sx={{ color: "white" }} />
        </IconButton>
        {!isMobile && (
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
        )}
      </Stack>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, padding: 2, paddingTop: 5 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <Stack direction="column" gap={1.8}>
            <Link to="/" style={styles.link}>
              <Typography sx={styles.linkTextResponsive}>PARTIDAS</Typography>
            </Link>
            <Link to="/ranking" style={styles.link}>
              <Typography sx={styles.linkTextResponsive}>RANKING</Typography>
            </Link>
            <Link to="/campeonato" style={styles.link}>
              <Typography sx={styles.linkTextResponsive}>
                CAMPEONATOS
              </Typography>
            </Link>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
