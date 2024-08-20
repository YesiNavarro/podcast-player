import React from 'react';
import './styles/SongCard.css';

// const SongCard = () => {
//     const songCard = ['Song Card 1', 'Song Card 2', 'Song Card 3'];
//     return (
//     <section className={styles.section}>
//         <h2>Canciones Sugeridas</h2>
//         <ul className={styles.list}>
//         {songCard.map((card, index) => (
//         <li key={index} className={styles.listItem}>{card}</li>
//         ))}
//         </ul>
//     </section>
//     );
// };

// export default SongCard;

const SongCard = ({ title, artist }) => {
  return (
    <div className="song-card">
      <p>{title}</p>
      <p>{artist}</p>
    </div>
  );
};

export default SongCard;
