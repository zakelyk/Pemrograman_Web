import React from "react";
import Hero from '../hero.jpg'

const Home = () => {
  return (
    <div class="image-container" style={{position: 'relative', display: 'flex'}}>
      <img src={Hero} style={{width: '100%'}} />
      <div
        style={{
          position: 'absolute',
          color: 'white',
          paddingLeft: '10%',
          paddingTop: '25%',
        }}
      >
        <h1 style={{fontSize: '350%'}}>Selamat Datang</h1>
        <p style={{fontSize: '150%'}}>di website Praktikum Pemrograman Website</p>
      </div>
    </div>
  );
};

export default Home;
