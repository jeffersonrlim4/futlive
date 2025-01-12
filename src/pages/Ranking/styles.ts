import { SxThemeProps } from "src/@types/types";

export function useStyles() {
  return {
    container: {
      justifyContent: "center",
      padding: 4,
    },
  } satisfies SxThemeProps;
}
