import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostList from "./pages/PostList";

export default function Routes() {
  if(isAuthenticated()){
    return(
      <BrowserRouter>
        <Route exact path="/" component={PostList} />
      </BrowserRouter>
    )
  }else{
    return(
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </BrowserRouter>
    )
  }
}