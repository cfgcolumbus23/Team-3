import './App.css';
<<<<<<< HEAD
import Header from './pages/Header.js'
import Footer from './components/footer';
import Footer from './pages/Footer.js'
import Home from "./pages/Home.js"
import Mentorship from "./pages/Mentorship.js"
//import { BrowserRouter,Switch,Route, Routes, Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Outlet, Link,  BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
        <div className="pages">
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
          </div>
          <div>
            <Header />
            <Home />
            <Footer />
          </div>

    </>
=======
import Footer from './components/footer';
import { Route, Routes } from "react-router-dom";
import ResponsiveNavBar from "./common/navbar.js";

function App() {
  return (
    <div>
      <ResponsiveNavBar />
      <Footer />
    </div>
>>>>>>> main
  );
}

export default App;
