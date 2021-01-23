import React from 'react'
import './App.css';

import Navbar from './Components/NavbarComponent'
import Jumbotron from './Components/JumbotronComponent'
import About from './Components/AboutComponent'
import Experience from './Components/ExperienceComponent'
import { Row, Col, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">   
      <Navbar /> 
      <Jumbotron />  
      <About />
      <Container className="experience">
        <h3>Work Experience</h3>
        <hr />
      <Row>
        <Col md={3}>
          <Experience 
          imageUrl="http://placekitten.com/300/200" 
          tanggal="Des 2017 - Des 2020" 
          namaPT="PT. Jasnita Telekomindo. Tbk" 
          jabatan="3C BPJSTK"
          descripisi="huuuu" />
        </Col>
        <Col md={3}>
          <Experience 
          imageUrl="http://placekitten.com/g/300/200" 
          tanggal="Apr 2016 - Agt 2017" 
          namaPT="Esence Group" 
          jabatan="Data Analyst System"
          descripisi="heeee" />
        </Col>
        <Col md={3}>
          <Experience 
          imageUrl="http://placekitten.com/300/200" 
          tanggal="Jan 2013 - Jan 2015" 
          namaPT="PT. Sabang Mandiri Abadi" 
          jabatan="Sales Promotion Boy"
          descripisi="hiiii" />
        </Col>
        <Col md={3}>
          <Experience 
          imageUrl="http://placekitten.com/g/300/200" 
          tanggal="Apr 2010 - Des 2012" 
          namaPT="Circle K" 
          jabatan="Customer Service Reprecentative"
          descripisi="haaa" />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
