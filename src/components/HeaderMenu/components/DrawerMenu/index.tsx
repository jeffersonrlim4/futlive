import { useStyles } from "@components/HeaderMenu/styles";
import { Box, Drawer, Stack, Typography } from "@mui/material";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface MenuDrawerProps {
  open: boolean;
  toggleDrawer: (open: boolean) => MouseEventHandler<HTMLDivElement>;
}

export function DrawerMenu({ open, toggleDrawer }: MenuDrawerProps) {
  const styles = useStyles();
  return (
    <Drawer open={open} onClose={toggleDrawer(false)} data-testid="drawer-menu">
      <Box role="presentation" sx={styles.drawerBox}>
        <Stack direction="column" gap={1.8}>
          <Link to="/" style={styles.link}>
            <Typography sx={styles.linkTextResponsive}>JOGOS</Typography>
          </Link>
          <Link to="/ranking" style={styles.link}>
            <Typography sx={styles.linkTextResponsive}>RANKING</Typography>
          </Link>
          <Link to="/campeonato" style={styles.link}>
            <Typography sx={styles.linkTextResponsive}>CAMPEONATOS</Typography>
          </Link>
        </Stack>
      </Box>
    </Drawer>
  );
}
