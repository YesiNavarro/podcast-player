import React from 'react';
import './styles/PlaybackBar.css';

const PlaybackBar = () => {
  return (
    <div className="playback-bar">
      <p>Nombre del cantante- Nombre de la canción.</p>
      <button>⏮</button>
      <button>⏯</button>
      <button>⏭</button>
    </div>
  );
};

export default PlaybackBar;
