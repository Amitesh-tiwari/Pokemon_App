// src/components/PokemonCard.js
import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <img src={pokemon.url} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
    </div>
  );
};

export default PokemonCard;