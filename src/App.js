import React from "react";
import Login from "./components/security/Login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import MenuAppBar from "./components/Navigation/MenuAppBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Book from "./components/views/Book.js";
import Register from "./components/security/Register.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route exact path="/login"    component={Login}    />
          <Route exact path="/register" component={Register} />
          <Route exact path="/"         component={Book}     />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
