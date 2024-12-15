import React, { useState } from 'react';

const PlaylistForm = ({ onAddPlaylist }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPlaylist({ title, description, image });
        setTitle("");
        setDescription("");
        setImage("");
};

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="URL de la imagen"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Agregar playlist</button>
        </form>
    );
};

export default PlaylistForm;