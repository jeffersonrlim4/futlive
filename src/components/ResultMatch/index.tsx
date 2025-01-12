import { Box, Stack, Typography } from "@mui/material";
import { useStyles } from "./styles";

const botafogoImg = "https://escudosfc.com.br/images/botafogo.gif";
const saoPauloImg = "https://escudosfc.com.br/images/saopaulo.png";

export function ResultMatch() {
  const styles = useStyles();
  return (
    <Stack direction="row" sx={styles.container} spacing={5}>
      <Stack direction="row" sx={styles.centerSpacing} spacing={4}>
        <Stack sx={styles.centerSpacing} spacing={1}>
          <Box component="img" src={botafogoImg} sx={styles.imgTeam} />
          <Typography variant="h4">Botafogo</Typography>
        </Stack>
        <Typography variant="h3">4</Typography>
      </Stack>

      <Typography variant="h4">x</Typography>

      <Stack direction="row" sx={styles.centerSpacing} spacing={4}>
        <Typography variant="h3">2</Typography>
        <Stack sx={styles.centerSpacing} spacing={1}>
          <Box component="img" src={saoPauloImg} sx={styles.imgTeam} />
          <Typography variant="h4">São Paulo</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
