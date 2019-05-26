import React from 'react';
import './App.css';
import Pokemon from './pokemon';
import image from './images/pichu.jpg';

function App() {
  return (
    <div className="App">
        <div className="row m-0">
              <Pokemon
                  icon={image}
                  name="Pikachu"
                  type="electric"
              />
              <Pokemon name="Pichu" type="electric" />
              <Pokemon name="Raichu" type="electric" />
        </div>
    </div>
  );
}

export default App;
