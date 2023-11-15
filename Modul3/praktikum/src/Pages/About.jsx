import React from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
import labit from "./logo-labit.png"

const About = () => {
  return (
    <>
      <div>
        <div style={{backgroundColor: '#383838', height: '300px', paddingTop: '80px'}}>
              <img style={{width: '400px', backgroundColor: '#383838'}} src={labit}/>
        </div>
        <div>
        <h3>Welcome to "Lab Informatika UMM"</h3>
        <p>
            Laboratorium Teknik Informatika berfungsi sebagai pusat pembelajaran praktis dan
            eksperimental yang dipergunakan oleh mahasiswa dan pelayanan untuk riset dan konsultasi keteknikan mencakup
            desain sofware untuk animasi, administrasi, grafis dll.
        </p>

        <h4>a. Laboratorium Rekayasa Perangkat Lunak</h4>
        <p>
            Melakukan analisa kelayakan pembuatan, penerapan proyek perangkat lunak, analisa kebutuhan, perancangan, pembuatan dan penjaminan kualitas perangkat lunak serta melakukan rekayasa ulang perangkat lunak.
        </p>

        <h4>b. Laboratorium Sistem dan Keamanan Jaringan</h4>
        <p>
            Menganalisis permasalahan, memberikan solusi berupa perekayasaan, pembuatan dan pengelolaan, serta melakukan evaluasi pada sistem jaringan.
        </p>

        <h4>c. Laboratorium Game Cerdas</h4>
        <p>
            Bekerja dengan tim mengembangkan dan merancang video game. Mengkoordinasikan tugas kompleks menciptakan video game baru yang memiliki tugas seperti merancang karakter, level, teka-teki, art dan animasi. Software Engineer, Programmer, atau Computer Scientist yang terutama mengembangkan basis kode untuk video game atau perangkat lunak terkait, seperti alat-alat pengembangan game.
        </p>

        <h4>d. Laboratorium Sains Data</h4>
        <p>
            Menganalisis dan mengolah data menjadi suatu informasi dan pengetahuan.
        </p>
    </div>
      </div>
    </>
  );
};

export default About;
