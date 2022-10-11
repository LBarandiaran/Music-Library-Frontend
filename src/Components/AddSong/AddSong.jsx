import React, { useState } from 'react';
import axios from 'axios';



const AddSong = (props) => {

async function AddNewSong(newSong){
    const response = await axios.post(`http://127.0.0.1:8000/api/music/`, newSong);
}

const [title, setTitle] = useState('');
const [artist, setArtist] = useState('');
const [album, setAlbum] = useState('');
const [releaseDate, setReleaseDate] = useState('');
const [genre, setGenre] = useState('');

function handleSubmit(event){
    event.preventDefault();
    console.log()
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={(event)=> setTitle(event.target.value)}/>
                <label>Artist</label>
                <input value={artist} onChange={(event)=> setArtist(event.target.value)}/>
                <label>Album</label>
                <input value={album} onChange={(event)=> setAlbum(event.target.value)}/>
                <label>Release Date</label>
                <input value={release_date} onChange={(event)=> setReleaseDate(event.target.value)}/>
                <label>Genre</label>
                <input value={genre} onChange={(event)=> setGenre(event.target.value)}/>
                
            </form>

        </div>
    );
}

export default AddSong;