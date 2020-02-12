import React from 'react';
import Header from './Components/Header'
import Joke from './Components/Joke'
import Footer from './Components/Footer'

function App() {
  function Reload() {
    window.location.reload();
  }

  return (
    <div>
      <Header/>
      <div className="main">
        <Joke/>
        <button className="reload" onClick={Reload}>Reload</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
