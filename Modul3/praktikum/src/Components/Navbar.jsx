import React from "react";
import { Link } from "react-router-dom";
import ilab from '../logo-ilab.png';
import '../prakStyle.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg d-flex justify-content-between">
      <div class="navbar-nav">
        <a class="navbar-brand" href="#">
          <img
            src={ilab}
            style={{ marginLeft: '30%', height: '80px' }}
            alt="Bootstrap"
          />
        </a>
      {/* </div> */}
      {/* <div class="navbar-nav" style={{ paddingLeft: '20px' }}> */}
        <Link class="nav-link" aria-current="page" to="/">HOME</Link>
        {/* <a class="nav-link" aria-current="page" href="#">HOME</a> */}
        <Link class="nav-link" aria-current="page" to="/About">ABOUT US</Link>
        {/* <a class="nav-link" href="#">ABOUT US</a> */}
        <Link class="nav-link" aria-current="page" to="/Contact">Contact US</Link>
        {/* <a class="nav-link" href="#">CONTACT</a> */}
      </div>
      <div class="navbar-nav" style={{ paddingRight: '2%' }}>
        <button
          type="button"
          style={{
            backgroundColor: '#ffffff',
            borderColor: 'black',
            marginRight: '10px'
          }}
          class="btn custom-nav-btn"
        >
          SIGN UP
        </button>
        <button
          type="button"
          style={{ backgroundColor: '#6a86ed', color: 'white' }}
          class="btn custom-nav-btn"
        >
          LOG IN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
