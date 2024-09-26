import React from 'react';
import React, { useState } from 'react';
import PlaylistForm from './PlaylistForm.jsx';
import Playlist from './Playlist.jsx';

const Sidebar = ({ playlists, onAddPlaylist }) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <aside>
            <button onClick={() => setShowForm(!showForm)}>Nueva playlist</button>
            {showForm && <PlaylistForm onAddPlaylist={onAddPlaylist} />}
            <section>
                {playlists.map((playlist, index) => (
                    <Playlist key={index} playlist={playlist} />
                ))}
            </section>
        </aside>
    );
};

export default Sidebar;
