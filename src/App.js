import React from "react";
import Login from "./components/security/Login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Register from "./components/security/register";
import MenuAppBar from "./components/Navigation/MenuAppBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar />
      <Register />
    </ThemeProvider>
  );
}

export default App;
