import { SxThemeProps } from "src/types/types";

export function useStyles() {
  return {
    container: {
      minHeight: "calc(100vh - 140px)",
    },
  } satisfies SxThemeProps;
}
