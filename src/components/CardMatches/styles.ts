import { useTheme } from "@mui/material/styles";
import { SxThemeProps } from "src/@types/types";

export function useStyles() {
  const theme = useTheme();
  return {
    cardContainer: {
      position: "relative",
    },
    live: {
      position: "absolute",
      right: 10,
      top: 10,
      backgroundColor: "red",
      color: "white",
      width: 70,
      height: 25,
      fontSize: 12,
      animation: "blink 1.2s infinite ease-in-out",
      "@keyframes blink": {
        "0%": { opacity: 1 },
        "50%": { opacity: 0.2 },
        "100%": { opacity: 1 },
      },
      [theme.breakpoints.down("sm")]: {
        width: 60,
        height: 22,
        fontSize: 10,
      },
    },
    imgTeam: {
      width: 38,
      height: 38,
    },
    cardContentContainer: {
      paddingTop: 5,
    },
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    leftTeam: {
      alignItems: "center",
      justifyContent: "flex-end",
    },
    rightTeam: {
      alignItems: "center",
      justifyContent: "flex-start",
    },
    cardActionContainer: {
      justifyContent: "center",
    },
    button: {
      color: "black",
      ":hover": {
        backgroundColor: "transparent",
      },
    },
  } satisfies SxThemeProps;
}
