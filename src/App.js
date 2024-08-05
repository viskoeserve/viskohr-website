import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Layout/Header/Navbar";
import Topsection from "./Layout/Header/Topsection";
import About from "./Pages/About";
import Card from "./Cards/Card";
import Features from "./Pages/Features";
import Serivices from "./Services/Serivices";
import Contact from "./Pages/Contact";
import Footer from "./Layout/Footer/Footer";
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <Navbar />
      <Topsection />
      <About />
      <Card/>
      <Features/>
      <Serivices/>
      <Contact/>
      <Footer/>
     
    </>
  );
}

export default App;
