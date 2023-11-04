import './App.css';
import Footer from './components/footer';
import { Route, Routes } from "react-router-dom";
import ResponsiveNavBar from "./common/navbar.js";

function App() {
  return (
    <div>
      <ResponsiveNavBar />
      <Footer />
    </div>
  );
}

export default App;
