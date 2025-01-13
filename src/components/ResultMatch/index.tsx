import { Box, Stack, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { useAppSelector } from "@store/hooks";
import { teamsImage } from "@constants/teams";

export function ResultMatch() {
  const styles = useStyles();
  const selectedTeam = useAppSelector(
    (selector) => selector.detailsMatch.selectedTeam
  );
  return (
    <Stack direction="row" sx={styles.container} spacing={5}>
      <Stack direction="row" sx={styles.centerSpacing} spacing={4}>
        <Stack sx={styles.centerSpacing} spacing={1}>
          <Box
            component="img"
            src={teamsImage[selectedTeam.Equipe1 as keyof typeof teamsImage]}
            sx={styles.imgTeam}
          />
          <Typography variant="h4">{selectedTeam.Equipe1}</Typography>
        </Stack>
        <Typography variant="h3">{selectedTeam.GolsEquipe1}</Typography>
      </Stack>

      <Typography variant="h4">x</Typography>

      <Stack direction="row" sx={styles.centerSpacing} spacing={4}>
        <Typography variant="h3">{selectedTeam.GolsEquipe2}</Typography>
        <Stack sx={styles.centerSpacing} spacing={1}>
          <Box
            component="img"
            src={teamsImage[selectedTeam.Equipe2 as keyof typeof teamsImage]}
            sx={styles.imgTeam}
          />
          <Typography variant="h4">{selectedTeam.Equipe2}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
