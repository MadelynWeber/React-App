import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserPage from "./pages/UserPage";
import Header from "./pages/Header";

// dom - document object model (what shows up in webpage)
// let - shows a variable may change later (similar to var)
// dont want to manipulate HTML directly in react
// controlled - react handles input (want controlled inputs) -- tell input what to show and handle on change
function App() {

  return (
    <Router> {/* allows us to define pages and move between them */}
    <CssBaseline/>  {/* resets CSS for every browser (so it looks similar across any browser) */}
    <Container maxWidth='100%'>
      <Header />
      <Switch> {/* handles moving between pages (similar to a switch statement in C++) */} 
        <Route exact path='/'> {/* exact path keyword is similar to === operation */}
          <HomePage />
        </Route>
        <Route path='/SignInPage'>
          <SignInPage />
        </Route>
        <Route path='/HomePage'>
          <HomePage />
        </Route>
        <Route path='/UserPage'>
          <UserPage />
        </Route>
      </Switch>
    </Container>
  </Router>
  );
}

export default App;