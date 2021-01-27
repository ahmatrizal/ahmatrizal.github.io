import React from 'react'
import './App.css';

import Navbar from './Components/NavbarComponent'
import Jumbotron from './Components/JumbotronComponent'
import About from './Components/AboutComponent'
import Experience from './Components/ExperienceComponent'
import Portfolio from './Components/PortfolioComponent';
import Contact from './Components/ContactComponent';

function App() {
  return (
    <div className="App">   
      <Navbar /> 
      <Jumbotron />  
      <About />
      <Portfolio />
            <h1 className="mt-5">Experience</h1>
            <hr />
          <Experience 
            imageUrl="assets/images/Experience/jasnita.png" 
            tanggal="Des 2017 - Des 2020" 
            namaPT="PT. Jasnita Telekomindo. Tbk" 
            jabatan="3C BPJSTK"
            descripisi="huuuu" />
          <Experience 
            imageUrl="assets/images/Experience/Essence.png" 
            tanggal="Apr 2016 - Agt 2017" 
            namaPT="Essence Group" 
            jabatan="Data Analyst System"
            descripisi="heeee" />
          <Experience 
            imageUrl="assets/images/Experience/fladeo.jpg" 
            tanggal="Jan 2013 - Jan 2015" 
            namaPT="PT. Sabang Mandiri Abadi" 
            jabatan="Sales Promotion Boy"
            descripisi="hiiii" />
          <Experience 
            imageUrl="assets/images/Experience/circlek.png" 
            tanggal="Apr 2010 - Des 2012" 
            namaPT="Circle K" 
            jabatan="Customer Service Reprecentative"
            descripisi="haaa" />
  
        <Contact />
    </div>
  );
}

export default App;
