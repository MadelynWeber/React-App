import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserPage from "./pages/UserPage";
import Header from "./pages/Header";


/* TODOs: 
    ===========================
    (DONE) 1. create a web page with an app bar in React
      (DONE) a. left side of bar should be empty
      (DONE) b. right side of bar should have a login button
    (DONE) 2. the main app page should be an empty page with just the app/navigation bar at the top
    (DONE) 3. when the login button is clicked, it should take you to the login page
    (DONE) 4. should be implemented using React Router (this is what tells the app to go to the next page)
    (DONE) 5. header bar should show when someone is logged in
            a. add a general user icon once a user logs in
      (DONE) b. add a drop-down menu from this icon to give user option to log out
      c. this only shows once a user logs in -- so this should disappear once the user clicks "log out"
      
*/


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