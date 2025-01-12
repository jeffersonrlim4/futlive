import { SxThemeProps } from "src/@types/types";

export function useStyles() {
  return {
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    imgTeam: {
      width: 38,
      height: 38,
    },
    centerSpacing: {
      alignItems: "center",
    },
  } satisfies SxThemeProps;
}
