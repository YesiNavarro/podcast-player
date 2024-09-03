import React from 'react';
import Playlist from './Playlist';

function Sidebar({ playlists, onNewPlaylist }) {
  return (
    <div className="sidebar">
      <button onClick={onNewPlaylist}>Nueva lista de reproducción</button>
      <div className="playlist-list">
        {playlists.map((playlist, index) => (
          <Playlist key={index} playlist={playlist} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
