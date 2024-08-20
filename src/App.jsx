import React from 'react';
import Header from './components/Header';
import SongCard from './components/SongCard';
import AlbumCard from './components/AlbumCard';
import ArtistCard from './components/ArtistCard';
import PlaybackBar from './components/PlaybackBar';
import './App.css';

const songs = [
  { id: 1, title: "Song 1", artist: "Artist 1" },
  { id: 2, title: "Song 2", artist: "Artist 2" },
  { id: 3, title: "Song 3", artist: "Artist 3" }
];

const albums = [
  { id: 1, title: "Album 1", artist: "Artist 1", cover: "https://via.placeholder.com/150" },
  { id: 2, title: "Album 2", artist: "Artist 2", cover: "https://via.placeholder.com/150" }
];

const artists = [
  { id: 1, name: "Artist 1", genre: "Genre 1" },
  { id: 2, name: "Artist 2", genre: "Genre 2" }
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="listen-again">
        <h2>Recientes</h2>
        {songs.map(song => (
          <SongCard key={song.id} title={song.title} artist={song.artist} />
        ))}
      </section>
      <section className="quick-picks">
        <h2>Canciones Sugeridas</h2>
        {songs.map(song => (
          <SongCard key={song.id} title={song.title} artist={song.artist} />
        ))}
      </section>
      <section className="recommended-albums">
        <h2>Albums Recomendados</h2>
        {albums.map(album => (
          <AlbumCard key={album.id} title={album.title} artist={album.artist} cover={album.cover} />
        ))}
      </section>
      <section className="similar-artists">
        <h2>[Artista] Similar</h2>
        {artists.map(artist => (
          <ArtistCard key={artist.id} name={artist.name} genre={artist.genre} />
        ))}
      </section>
      <PlaybackBar />
    </div>
  );
}

export default App;
