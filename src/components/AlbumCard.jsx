import React from 'react';
import './styles/AlbumCard.css';

const AlbumCard = ({ title, artist, cover }) => {
  return (
    <div className="album-card">
      <img src={cover} alt={`${title} cover`} />
      <p>{title}</p>
      <p>{artist}</p>
    </div>
  );
};

export default AlbumCard;
