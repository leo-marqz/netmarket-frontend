import React from "react";
import Login from "./components/security/Login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Register from "./components/security/register";
import MenuAppBar from "./components/Navigation/MenuAppBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
