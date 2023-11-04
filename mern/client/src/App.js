import './App.css';
import Footer from './components/footer';
import { Route, Routes } from "react-router-dom";
import ResponsiveNavBar from "./common/navbar.js";
import Course from "./pages/Course.js"
function App() {
  return (
    <div>
      <ResponsiveNavBar />
      < Course />
      <Footer />
    </div>
  );
}

export default App;
