import './App.css';
import Header from './components/Header.js'
import Footer from './components/footer';
import Home from "./pages/Home.js"
//import { ReactDOM } from 'react-dom/client';
//import Mentorship from "./pages/Mentorship.js"
//import { BrowserRouter,Switch,Route, Routes, Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Outlet, Link,  BrowserRouter} from "react-router-dom";


//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(App);
function App() {
  return (
          <div>
            <Header />
            <Home />
            <Footer />
          </div>
  )
}

export default App;
