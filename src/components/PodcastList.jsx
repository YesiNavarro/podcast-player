import React, { useState } from 'react';

const PodcastList = ({ podcasts }) => {
    const [playing, setPlaying] = useState(null);

    const handlePlay = (url) => {
        if (playing === url) {
            setPlaying(null);
        } else {
            setPlaying(url);
        }
    };

    return (
        <div>
            {podcasts.map((podcast, index) => (
                <div key={index}>
                    <h2>{podcast.title}</h2>
                    <p>{podcast.description}</p>
                    <img src={podcast.channel.urs.logo_image.original} alt={podcast.title} />
                    <button onClick={() => handlePlay(podcast.urls.high_mp3)}>
                        {playing === podcast.urls.high_mp3 ? "Pausar" : "Reproducir"}
                    </button>
                    {playing === podcast.urls.high_mp3 && <audio src={podcast.urls.high_mp3} autoPlay controls />}
                </div>
            ))}
        </div>
    );
};

export default PodcastList;