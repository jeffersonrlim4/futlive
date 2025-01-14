import { Skeleton } from "@mui/material";

export function CardSkeleton() {
  return (
    <>
      <Skeleton variant="rounded" width={400} height={200} />
      <Skeleton variant="rounded" width={400} height={200} />
    </>
  );
}
