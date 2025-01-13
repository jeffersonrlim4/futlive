import { INextMatches } from "src/@types/INextMatches";
import { useStyles } from "./styles";
import {
  Box,
  Card,
  CardContent,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { teamsImage } from "@constants/teams";

interface NextMatchesProps {
  data: INextMatches;
}

export function NextMatches({ data }: NextMatchesProps) {
  const team = data.Texto.split(" ");
  const styles = useStyles();
  return (
    <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
      <Card>
        <CardContent>
          <Stack direction="row" sx={styles.container} spacing={5}>
            <Stack direction="row" sx={styles.centerSpacing} spacing={4}>
              <Stack sx={styles.centerSpacing} spacing={1}>
                <Box
                  component="img"
                  src={teamsImage[team[0] as keyof typeof teamsImage]}
                  sx={styles.imgTeam}
                />
                <Typography>{team[0]}</Typography>
              </Stack>
            </Stack>

            <Typography>x</Typography>

            <Stack direction="row" sx={styles.centerSpacing} spacing={4}>
              <Stack sx={styles.centerSpacing} spacing={1}>
                <Box
                  component="img"
                  src={
                    teamsImage[
                      team.slice(2).join(" ") as keyof typeof teamsImage
                    ]
                  }
                  sx={styles.imgTeam}
                />
                <Typography>{team.slice(2).join(" ")}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid2>
  );
}
