import { RootLayout } from "@components/RootLayout";
import { Stack, Typography } from "@mui/material";

export function NotFoundPage404() {
  return (
    <RootLayout>
      <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h3">404 - Página não encontrada</Typography>
      </Stack>
    </RootLayout>
  );
}
