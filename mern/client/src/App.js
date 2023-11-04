import './App.css';
import Header from './components/Header.js'
import Footer from './components/footer';
import Home from "./pages/Home";
import Courses from "./pages/Course"
import Resources from "./pages/mentorship.js"
import Mentorship from "./pages/mentorship.js"
import Login from "./pages/Login"
import Signup from './pages/Signup';

//import { BrowserRouter,Switch,Route, Routes, Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Outlet, Link,  BrowserRouter} from "react-router-dom";


//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(App);
function App() {
  return (
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
  )
}

export default App;
