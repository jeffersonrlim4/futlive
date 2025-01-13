import { useTheme } from "@mui/material/styles";
import { SxThemeProps } from "src/@types/types";

export function useStyles() {
  const theme = useTheme();
  return {
    container: {
      backgroundColor: "#06AA48",
      height: 80,
      paddingX: 20,
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        paddingX: 5,
      },
    },
    btnResponsive: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    link: {
      textDecoration: "none",
    },
    linkText: {
      color: "white",
      textDecoration: "none",
      textTransform: "capitalize",
      ":hover": { textDecoration: "underline" },
    },
    linkTextResponsive: {
      color: "black",
      textDecoration: "none",
      textTransform: "capitalize",
    },
    logo: {
      fontSize: 26,
      color: "white",
      fontWeight: 700,
      textDecoration: "none",
    },
  } satisfies SxThemeProps;
}
