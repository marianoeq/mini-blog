import React from "react";
import NavBar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import PageNotFound from "./PageNotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

/* <a href={link}>Google site</a> {/* This is a dynamic value */
