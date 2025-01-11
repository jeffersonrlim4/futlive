/* eslint-disable @typescript-eslint/no-explicit-any */
import { SxProps, Theme } from "@mui/material";

export type SxThemeFuncProps<T = any> = (value: T) => SxProps<Theme>;
export type SxThemeProps = Record<string, SxProps<Theme> | SxThemeFuncProps>;
