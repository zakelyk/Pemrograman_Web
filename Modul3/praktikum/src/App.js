import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import './prakStyle.css'
import Navbar from "../../praktikum/src/Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";

// const Home = () => <h1>Halaman Utama</h1>;
// const About = () => <h1>Tentang kami</h1>;
// const Contacts = () => <h1>Hubungi Kami</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} /> 
        {/* <Route path="/Home" Component={Home} />  */}
        <Route path="/About" Component={About} />
        <Route path="/Contacts" Component={Contacts} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
