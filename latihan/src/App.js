import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import About from "./Pages/about";
// import Menu from "./ages/menu";

const Menu = () => <h1>Halaman Utama</h1>;
const About = () => <h1>Tentang kami</h1>;
const Contacts = () => <h1>Hubungi Kami</h1>;

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/About">Tentang</Link>
          </li>
          <li>
            <Link to="/Contacts">Kontak</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/About" Component={About} />
        <Route path="/Contacts" Component={Contacts} />
        <Route path="/" Component={Menu} />
      </Routes>
    </Router>
  );
}

export default App;
