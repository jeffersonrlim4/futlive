import { SxThemeProps } from "src/@types/types";

export function useStyles() {
  return {
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    imgTeam: {
      width: 120,
      height: 120,
    },
    centerSpacing: {
      alignItems: "center",
    },
  } satisfies SxThemeProps;
}
