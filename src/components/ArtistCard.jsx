import React from 'react';
import './styles/ArtistCard.css';

const ArtistCard = ({ artist }) => {
  return (
    <div>
      <h3>{artist.name}</h3>
    </div>
  );
};

export default ArtistCard;
