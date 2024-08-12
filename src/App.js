import React from "react";
import Login from "./components/security/Login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
