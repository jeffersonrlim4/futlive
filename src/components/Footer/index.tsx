import { Stack, Typography } from "@mui/material";
import { useStyles } from "./styles";

export function Footer() {
  const styles = useStyles();

  return (
    <Stack sx={styles.container}>
      <Typography sx={styles.text}>
        Futlive © | Todos os direitos reservados
      </Typography>
    </Stack>
  );
}
