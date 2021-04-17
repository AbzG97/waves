import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function Song({song, songs, index, setCurrentSong, setSongs, isPlaying, favourtieSongs, setFavouriteSongs}) {
 

  const favouriteHandler = () => {
    console.log(`${song.name} has been added to favourites`);
     songs.forEach((state)  => {
       if(state.id === song.id){
         state.favourite = true;
       }
     });  
    localStorage.setItem('data', JSON.stringify(songs));
    
  }
  

  const selectSongHandler = () => {
    const selected = songs.filter((selected) => selected.id === song.id ); // filter out the selected song 
    setCurrentSong(selected[0]); 
    songs.forEach(song => {
      if(song.id !== selected[0].id){
        song.active = false;
      } else {
        song.active = true;
      }
    });
    setSongs(songs);
  }
 


  return (
    <div className={`song ${song.active ? 'selected' : ""}`} onClick={selectSongHandler}>
        <FontAwesomeIcon icon={faHeart} size='sm' className={`${song.favourite ? 'favourited-song ' : 'heart-icon'}`} onClick={favouriteHandler}/>
        <p className="index">{index + 1}</p>
        <p className="song-name">{song.name}</p>
        <p className="artist">{song.artist}</p>
    </div>
  );
}

export default Song;