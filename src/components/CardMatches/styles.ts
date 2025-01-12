import { SxThemeProps } from "src/@types/types";

export function useStyles() {
  return {
    cardContainer: {
      position: "relative",
    },
    live: {
      position: "absolute",
      right: 5,
      top: 5,
      backgroundColor: "red",
      color: "white",
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
