import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Course from "./pages/Course";
import Mentorship from "./pages/mentorship";
import NewsFeed from "./pages/NewsFeed.js";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<App />}/>
          <Route path = "/Resources" element = {<NewsFeed />} />
          <Route path = "/Courses" element = {<Course />} />
          
          <Route path = "/Mentorship" element = {<Mentorship />} />
          <Route path = "/Connection" />
          
        </Routes>
      </BrowserRouter>  
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

//Extra Routes
{/* <Route path = "/resources" element = {<NewsFeed />} />
<Route path = "/login" element = {<Login />} />
<Route path = "/signup" element = {<Signup/>} /> */}


