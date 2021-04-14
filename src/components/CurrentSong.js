import React from 'react';
import Song from './Song';



function CurrentSong({songs, currentSong, setCurrentSong, isPlaying, setSongs}) {
  return (
    <div className="current-song">
        <img src={currentSong.cover} alt="cover"/>
        <h1>{currentSong.name}</h1>
        <h2>{currentSong.artist}</h2>
       
        
    </div>
      
     
  );
}

export default CurrentSong;