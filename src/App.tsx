import { CssBaseline, Typography } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Typography component="h1">Olá Futlive</Typography>
    </Provider>
  );
}

export default App;
