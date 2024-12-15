import React from 'react';
import './styles/AlbumCard.css';

const AlbumCard = ({ album }) => {
  return (
    <div>
      <h3>{album.title}</h3>
      <p>{album.artist}</p>
    </div>
  );
};

export default AlbumCard;
