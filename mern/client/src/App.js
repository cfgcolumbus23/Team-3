import './App.css';
import Header from './pages/Header.js'
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
          <Footer />
          </BrowserRouter>

        </div>
    </>
  );
}

export default App;
