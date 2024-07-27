// src/App.js
import React from 'react';
import PokemonList from './component/PokemonList'
//import PokemonCard from './component/PokemonCard';
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Pokémon App</h1>
      <PokemonList />
    </div>
  );
};

export default App;