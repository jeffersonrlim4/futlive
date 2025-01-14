import { ResultMatch } from "@components/ResultMatch";
import { ResultTable } from "@components/Tables/ResultTable";
import { RootLayout } from "@components/RootLayout";
import { Stack } from "@mui/material";

export function DetailsPage() {
  return (
    <RootLayout>
      <Stack spacing={4}>
        <ResultMatch />
        <ResultTable />
      </Stack>
    </RootLayout>
  );
}
