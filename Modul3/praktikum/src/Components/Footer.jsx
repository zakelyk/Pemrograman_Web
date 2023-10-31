import React from "react";
import ilab from '../logo-ilab.png';
import fb from '../social-logo/logo-facebook.png';
import ig from '../social-logo/logo-instagram.png';
import tw from '../social-logo/logo-twitter.png';

const Footer = () => {
  return (
    <footer
      class="navbar d-flex justify-content-between pt-4 pb-4 align-items-start"
      style={{ paddingLeft: '10%', paddingRight: '5%', marginTop: '3%' }}
    >
      <div class="align-self-center">
        <img
          src={ilab}
          alt="Logo"
          width="75%"
          height="75px"
          style={{paddingLeft: '50px'}}
        />
        <p style={{paddingTop: '50px'}}>Copyright &copy; 2022 Infinite Learning</p>
      </div>

      <div>
        <h6>Services</h6>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">Email Marketing</a>
          </li>
          <li class="nav-item"><a href="#" class="nav-link">Campaign</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Branding</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Offline</a></li>
        </ul>
      </div>

      <div>
        <h6>About</h6>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">Our Story</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Benefits</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Team</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Careers</a>
          </li>
        </ul>
      </div>

      <div>
        <h6>Follow Us</h6>
        <table style={ {width: '100%' }}>
          <tr>
            <td
              style={{
                verticalAlign: 'middle',
                width: '10%',
                paddingRight: '10px',
                paddingLeft: '10px',
                paddingBottom: '10px',
              }}
            >
              <img id="foot-icon" src={fb} />
            </td>
            <td style={{verticalAlign: 'middle', paddingBottom:'10px'}}>
              <a href="#" class="nav-link">Facebook</a>
            </td>
          </tr>

          <tr>
            <td
              td
              style={{
                verticalAlign: 'middle',
                width: '10%',
                paddingRight: '10px',
                paddingLeft: '5px',
                paddingBottom: '10px',
              }}
            >
              <img id="foot-icon" src={tw} />
            </td>
            <td style={{verticalAlign: 'middle', paddingBottom: '10px'}}>
              <a href="#" class="nav-link">Twitter</a>
            </td>
          </tr>
          <tr>
            <td
              style={{
                verticalAlign: 'middle',
                width: '10%',
                paddingRight: '10px',
                paddingLeft: '8px',
                paddingBottom: '10px',
              }}
            >
              <img id="foot-icon" src={ig} />
            </td>
            <td style={{verticalAlign: 'middle', paddingBottom: '10px'}}>
              <a href="#" class="nav-link">Instagram</a>
            </td>
          </tr>
        </table>
      </div>
    </footer>
  );
};

export default Footer;
