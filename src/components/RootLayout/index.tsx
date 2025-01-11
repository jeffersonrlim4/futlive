import { Footer } from "@components/Footer";
import { HeaderMenu } from "@components/HeaderMenu";
import { Box } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";

interface RootLayoutProps {
  children: React.ReactElement;
}

export function RootLayout({ children }: RootLayoutProps) {
  const styles = useStyles();
  return (
    <Box>
      <HeaderMenu />
      <Box sx={styles.container}>{children}</Box>
      <Footer />
    </Box>
  );
}
