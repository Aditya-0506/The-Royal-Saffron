import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import SpecialMenu from './Components/SpecialMenu/SpecialMenu';
import Chef from './Components/Chef/Chef';
import FindUs from './Components/FindUs/FindUs';
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <Home />
      <About />
      <SpecialMenu />
      <Chef />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
