import { SxThemeProps } from "src/@types/types";

export function useStyles() {
  return {
    team: {
      alignItems: "center",
      justifyContent: "center",
    },
  } satisfies SxThemeProps;
}
