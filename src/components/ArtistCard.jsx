// src/components/ArtistCard.js
import React from 'react';
import './styles/ArtistCard.css';

const ArtistCard = ({ name, genre }) => {
  return (
    <div className="artist-card">
      <p>{name}</p>
      <p>{genre}</p>
    </div>
  );
};

export default ArtistCard;
