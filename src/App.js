import React from 'react';
import './App.css';
import Pokemon from './pokemon';
import image from './images/pichu.jpg';

function App() {
  return (
    <div className="App">
        <div className="row m-0">
              <Pokemon name="pikachu" />
              <Pokemon name="charizard" />

        </div>
    </div>
  );
}

export default App;
