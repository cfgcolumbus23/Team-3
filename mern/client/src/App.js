import './App.css';
import Header from './components/Header.js'
import Footer from './components/footer';
import Home from "./pages/Home";
import Courses from "./pages/Course"
import Resources from "./pages/mentorship"
import Mentorship from "./pages/mentorship"
import Login from "./pages/Login"
import Signup from './pages/Signup';

//import { BrowserRouter,Switch,Route, Routes, Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Outlet, Link,  BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
        {/* <div className="pages">
        <BrowserRouter>
         <Header/>
         <div style={{ height: "100vh"}}>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/resources" element={<Mentorship/>} />
            <Route path="/courses" element={<Mentorship/>} /> 
            <Route path="/mentorship" element={<Mentorship/>} />
            <Route path="/connect" element={<Mentorship/>} />
          </Routes>
          </div>
          </BrowserRouter>
          </div> */}
          <div>
            <Header />
              <div className = "pages">
                <Routes>
                  <Route path = "/" element = {<Home />}/>
                  <Route path = "/courses" element = {<Courses />} />
                  <Route path = "/resources" element = {<Resources />} />
                  <Route path = "/mentorship" element = {<Mentorship />} />
                  <Route path = "/login" element = {<Login />} />
                  <Route path = "/signup" element = {<Signup/>} />
                </Routes>
              </div>
            <Footer />

          </div>
    </>
  )
}

export default App;
