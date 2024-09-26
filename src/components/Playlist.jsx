import React from 'react';

const Playlist = ({ playlist }) => {
    return (
        <div>
            <img src={playlist.image} alt={playlist.title} />
            <h3>{playlist.title}</h3>
            <p>{playlist.description}</p>
        </div>
    );
}

export default Playlist;
