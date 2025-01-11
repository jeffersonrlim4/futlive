import { SxThemeProps } from "src/types/types";

export function useStyles() {
  return {
    container: {
      maxWidth: 1300,
      marginX: "auto",
      padding: 4,
    },
  } satisfies SxThemeProps;
}
