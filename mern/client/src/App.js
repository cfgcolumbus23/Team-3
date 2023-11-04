import './App.css';
import Header from './components/Header.js'
import Footer from './components/footer';
import Home from "./pages/Home.js";
import Login from "./pages/Login"
import Signup from './pages/Signup';
import NewsFeed from './NewsFeed.js'

//import Mentorship from "./pages/Mentorship.js"
//import { BrowserRouter,Switch,Route, Routes, Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Outlet, Link,  BrowserRouter} from "react-router-dom";
import NewsArticlePage from './pages/NewsArticlePage.js';

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
                  <Route path = "/" element = {<Home />}
                />
                  <Route path = "/login" element = {<Login />}
                />
                <Route path = "/signup" element = {<Signup/>}
                />
                <Route path ="/more" element = {<NewsArticlePage/>}exact/>
                <Route path="/newsfeed" element = {<NewsFeed/>} />
                </Routes>
              </div>
            <Footer />

          </div>
    </>
  )
}

export default App;
