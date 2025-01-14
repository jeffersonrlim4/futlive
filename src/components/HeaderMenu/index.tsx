import { Box, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "@mui/icons-material";
import { DesktopMenu } from "./components/DesktopMenu";
import { DrawerMenu } from "./components/DrawerMenu";

export function HeaderMenu() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
          <Menu sx={styles.menuIcon} />
        </IconButton>
        {!isMobile && <DesktopMenu />}
      </Stack>
      <DrawerMenu open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
