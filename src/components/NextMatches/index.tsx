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

const botafogoImg = "https://escudosfc.com.br/images/botafogo.gif";
const saoPauloImg = "https://escudosfc.com.br/images/saopaulo.png";

export function NextMatches({ Texto }: INextMatches) {
  const team = Texto.split(" ");
  const styles = useStyles();
  return (
    <Grid2 size={4}>
      <Card>
        <CardContent>
          <Stack direction="row" sx={styles.container} spacing={5}>
            <Stack direction="row" sx={styles.centerSpacing} spacing={4}>
              <Stack sx={styles.centerSpacing} spacing={1}>
                <Box component="img" src={botafogoImg} sx={styles.imgTeam} />
                <Typography>{team[0]}</Typography>
              </Stack>
            </Stack>

            <Typography>x</Typography>

            <Stack direction="row" sx={styles.centerSpacing} spacing={4}>
              <Stack sx={styles.centerSpacing} spacing={1}>
                <Box component="img" src={saoPauloImg} sx={styles.imgTeam} />
                <Typography>{team.slice(2).join(" ")}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid2>
  );
}
