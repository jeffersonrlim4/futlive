import { SxThemeProps } from "src/@types/types";
import { useTheme } from "@mui/material/styles";

export function useStyles() {
  const theme = useTheme();
  return {
    container: {
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      [theme.breakpoints.down("sm")]: {
        gap: 1,
      },
    },
    text: {
      [theme.breakpoints.down("sm")]: {
        ...theme.typography.body1,
      },
    },
    textResult: {
      fontSize: 46,
      [theme.breakpoints.down("sm")]: {
        fontSize: 26,
      },
    },
    imgTeam: {
      width: 120,
      height: 120,
      [theme.breakpoints.down("sm")]: {
        width: 50,
        height: 50,
      },
    },
    centerSpacing: {
      alignItems: "center",
    },
  } satisfies SxThemeProps;
}
