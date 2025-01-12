import { SxThemeProps } from "src/@types/types";

export function useStyles() {
  return {
    container: {
      backgroundColor: "#06AA48",
      height: 60,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "white",
    },
  } satisfies SxThemeProps;
}
