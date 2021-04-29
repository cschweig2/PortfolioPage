import './../App.css';
import React from 'react';
import Header from './Header';
import Control from './Control';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="main-background">
        <Control />
      </section>
    </div>
  );
}

export default App;