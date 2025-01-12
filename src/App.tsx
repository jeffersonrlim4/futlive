import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { router } from "./routes";
import { ReactQueryProvider } from "./utils/providers/ReactQueryProvider";

function App() {
  return (
    <Provider store={store}>
      <ReactQueryProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </Provider>
  );
}

export default App;
