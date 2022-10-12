import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import AddSong from './Components/AddSong/AddSong';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

const [songs, setSongs] = useState([]);

//sets up a way for the function to get called.  Call gets made when the page renders.  One of the most common ways to use useEffect
//The optional array at the end is to instruct to only run one time, when it gets reloaded
useEffect(() => {
  getAllSongs();
}, []);



async function getAllSongs(){
  const response = await axios.get(`http://127.0.0.1:8000/api/music/`);
  console.log(response.data)
  setSongs(response.data)
}


  return (
    <div >
      <SearchBar songs={songs} setSongs={setSongs}/>
      <DisplaySongs songs={songs} getAllSongs={getAllSongs} />
      <AddSong getAllSongs={getAllSongs} />
    </div>
  );
}

export default App;
