import React from 'react';
import Song from './Song';



function Library({songs, currentSong, setCurrentSong, isPlaying, setSongs}) {
  return (
    <div className="library">
        {/* <div className="album-details">
            <h1>Album-details</h1>

        </div> */}
        <div className="album-songs">
            {songs.map((song) => (
                <Song index={songs.findIndex((index) => index.id === song.id)} key={song.id} song={song}
                  setCurrentSong={setCurrentSong} isPlaying={isPlaying} songs={songs} setSongs={setSongs}/>
            ))}
        </div>
      
     
    </div>
  );
}

export default Library;