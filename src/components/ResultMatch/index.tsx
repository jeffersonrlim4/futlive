import { Stack, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { useAppSelector } from "@store/hooks";
import { teamsImage } from "@constants/teams";

export function ResultMatch() {
  const styles = useStyles();
  const selectedTeam = useAppSelector(
    (selector) => selector.detailsMatch.selectedTeam
  );
  return (
    <Stack direction="row" sx={styles.container}>
      <Stack direction="row" sx={styles.centerSpacing} spacing={4}>
        <Stack sx={styles.centerSpacing} spacing={1}>
          <img
            src={teamsImage[selectedTeam.Equipe1 as keyof typeof teamsImage]}
            style={styles.imgTeam}
            alt={selectedTeam.Equipe1}
          />
          <Typography sx={styles.text}>{selectedTeam.Equipe1}</Typography>
        </Stack>
        <Typography sx={styles.textResult}>
          {selectedTeam.GolsEquipe1}
        </Typography>
      </Stack>

      <Typography sx={styles.textResult}>x</Typography>

      <Stack direction="row" sx={styles.centerSpacing} spacing={4}>
        <Typography sx={styles.textResult}>
          {selectedTeam.GolsEquipe2}
        </Typography>
        <Stack sx={styles.centerSpacing} spacing={1}>
          <img
            src={teamsImage[selectedTeam.Equipe2 as keyof typeof teamsImage]}
            style={styles.imgTeam}
            alt={selectedTeam.Equipe2}
          />
          <Typography sx={styles.text}>{selectedTeam.Equipe2}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
