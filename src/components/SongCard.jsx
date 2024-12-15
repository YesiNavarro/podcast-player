import React from 'react';
import './styles/SongCard.css';

const SongCard = ({ song }) => {
  return (
    <div>
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
    </div>
  );
};

export default SongCard;
