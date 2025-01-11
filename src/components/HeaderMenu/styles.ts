import { SxThemeProps } from "src/types/types";

export function useStyles() {
  return {
    container: {
      backgroundColor: "#06AA48",
      height: 80,
      paddingX: 20,
      alignItems: "center",
      justifyContent: "space-between",
    },
    link: {
      color: "white",
      textDecoration: "none",
      textTransform: "capitalize",
      ":hover": { textDecoration: "underline" },
    },
  } satisfies SxThemeProps;
}
