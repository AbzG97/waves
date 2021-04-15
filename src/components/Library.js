import React from 'react';
import Song from './Song';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import  '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';



function Library({songs, currentSong, setCurrentSong, isPlaying, setSongs}) {
  return (
    <div className="library">
        <div className="album-details">
          <div className="info">
          <h1>Playlist name</h1>
            <h2>Artist</h2>
            <div>
              <h3>Genre</h3>
              <h3>Song count</h3>
            </div>
          </div>
            
            <div className="album-rating">
              <div><h1>4.5</h1><p>/5</p></div>
              <div>
                <FontAwesomeIcon className="rating-circles" icon={faCircle} size="sm" />
                <FontAwesomeIcon className="rating-circles" icon={faCircle} size="sm"/>
                <FontAwesomeIcon className="rating-circles" icon={faCircle} size="sm"/>
                <FontAwesomeIcon className="rating-circles" icon={faCircle} size="sm"/>
                <FontAwesomeIcon className="rating-circles" icon={faCircle} size="sm"/>
              </div>
            </div>
        </div>
        <hr/>

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