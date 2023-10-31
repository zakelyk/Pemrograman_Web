import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
// import './prakStyle.css'
import Navbar from "../../praktikum/src/Components/Navbar";

const Menu = () => <h1>Halaman Utama</h1>;
const About = () => <h1>Tentang kami</h1>;
const Contacts = () => <h1>Hubungi Kami</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/About" Component={About} />
        <Route path="/Contacts" Component={Contacts} />
        <Route path="/" Component={Menu} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
