import React from 'react'
import './App.css';

import Navbar from './Components/NavbarComponent'
import Jumbotron from './Components/JumbotronComponent'
import About from './Components/AboutComponent'

function App() {
  return (
    <div className="App">   
      <Navbar /> 
      <Jumbotron />  
      <About />
    </div>
  );
}

export default App;
