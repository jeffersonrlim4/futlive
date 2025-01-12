import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";

const botafogoImg = "https://escudosfc.com.br/images/botafogo.gif";
const saoPauloImg = "https://escudosfc.com.br/images/saopaulo.png";

export function CardMatches() {
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <Grid2 size={4}>
      <Card sx={styles.cardContainer}>
        <Chip label="Ao Vivo" sx={styles.live} />
        <CardContent sx={styles.cardContentContainer}>
          <Stack direction="row" sx={styles.container} spacing={3}>
            <Stack sx={styles.leftTeam}>
              <Box component="img" src={saoPauloImg} sx={styles.imgTeam} />
              <Typography>São Paulo</Typography>
              <Typography>3</Typography>
            </Stack>
            <Typography>x</Typography>
            <Stack sx={styles.rightTeam}>
              <Box component="img" src={botafogoImg} sx={styles.imgTeam} />
              <Typography>Botafogo</Typography>
              <Typography>1</Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions sx={styles.cardActionContainer}>
          <Button onClick={() => navigate("/details")} sx={styles.button}>
            Ver detalhes
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  );
}
