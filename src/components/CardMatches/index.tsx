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
import { ITodayGames } from "src/@types/ITodayGames";
import { teamsImage } from "@constants/teams";
import { useAppDispatch } from "@store/hooks";
import { updateDetailsMatch } from "@store/reducers/detailsMatch";

interface CardMatchesProps {
  data: ITodayGames;
}

export function CardMatches({ data }: CardMatchesProps) {
  const styles = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Grid2 size={4}>
      <Card sx={styles.cardContainer}>
        {data.Status === "Ao vivo" && <Chip label="Ao Vivo" sx={styles.live} />}
        <CardContent sx={styles.cardContentContainer}>
          <Stack direction="row" sx={styles.container} spacing={3}>
            <Stack sx={styles.leftTeam}>
              <Box
                component="img"
                src={teamsImage[data.Equipe1]}
                sx={styles.imgTeam}
              />
              <Typography>{data.Equipe1}</Typography>
              <Typography>{data.GolsEquipe1}</Typography>
            </Stack>
            <Typography>x</Typography>
            <Stack sx={styles.rightTeam}>
              <Box
                component="img"
                src={teamsImage[data.Equipe2]}
                sx={styles.imgTeam}
              />
              <Typography>{data.Equipe2}</Typography>
              <Typography>{data.GolsEquipe2}</Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions sx={styles.cardActionContainer}>
          <Button
            onClick={() => {
              dispatch(updateDetailsMatch(data));
              navigate("/detalhes");
            }}
            sx={styles.button}
          >
            Ver detalhes
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  );
}
