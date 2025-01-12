import { SxThemeProps } from "src/@types/types";

export function useStyles() {
  return {
    container: {
      minHeight: "calc(100vh - 140px)",
      maxWidth: 1300,
      marginX: "auto",
      padding: 4,
    },
  } satisfies SxThemeProps;
}
