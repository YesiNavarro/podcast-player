import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import SongCard from './components/SongCard.jsx';
import AlbumCard from './components/AlbumCard.jsx';
import ArtistCard from './components/ArtistCard.jsx';
import PlaybackBar from './components/PlaybackBar.jsx';
import Sidebar from './components/Sidebar.jsx';
import PodcastList from './components/PodcastList.jsx';
import './App.css';

const App = () => {
  const [songs] = useState([
    { title: "Song 1", artist: "Artist 1" },
    { title: "Song 2", artist: "Artist 2" },
    { title: "Song 3", artist: "Artist 3" },
]);

  const [albums] = useState([
    { title: "Album 1", artist: "Artist 1" },
    { title: "Album 2", artist: "Artist 2" },
]);

  const [artists] = useState([
    { name: "Artista Similar 1" },
    { name: "Artista Similar 2" },
]);

  const [playlists, setPlaylists] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  const addPlaylist = (playlist) => {
    setPlaylists([...playlists, playlist]);
  };

  useEffect(() => {
    fetch("https://api.audioboom.com/audio_clips")
      .then((response) => response.json())
      .then((data) => setPodcasts(data.body.audio_clips));
  }, []);
  
  return (
    <div className="App">
      <Header />

      <div className="main-content">
        {/* Sidebar for Playlists */}
        <Sidebar playlists={playlists} onAddPlaylist={addPlaylist} />

        <div className="content">
          {/* Songs Section */}
          <section>
            <h2>Recientes</h2>
            {songs.map((song, index) => (
              <SongCard key={index} song={song} />
            ))}
          </section>
          
          {/* Albums Section */}
          <section>
            <h2>Albums Recomendados</h2>
            {albums.map((album, index) => (
              <AlbumCard key={index} album={album} />
            ))}
          </section>
          
          {/* Artists Section */}
          <section>
            <h2>Artistas Similares</h2>
            {artists.map((artist, index) => (
              <ArtistCard key={index} artist={artist} />
            ))}
          </section>
          
          {/* Podcasts Section */}
          <section>
            <h2>Podcasts</h2>
            <PodcastList podcasts={podcasts} />
          </section>
        </div>
      </div>
      
      <PlaybackBar />
    </div>
  );
};

export default App;
