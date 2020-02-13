import React from 'react';
import Header from './Components/Header'
import Joke from './Components/Joke'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <div className="main">
        <Joke/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
