import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Course from "./pages/Course";
import Mentorship from "./pages/mentorship";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App />}/>
        <Route path = "/Courses" element = {<Course />} />
        
        <Route path = "/Mentorship" element = {<Mentorship />} />
        
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById("root")
);

//Extra Routes
{/* <Route path = "/resources" element = {<NewsFeed />} />
<Route path = "/login" element = {<Login />} />
<Route path = "/signup" element = {<Signup/>} /> */}


