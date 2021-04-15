import React from 'react';

function Song({song, songs, index, setCurrentSong, setSongs, isPlaying}) {
  

  const selectSongHandler = () => {
    const selected = songs.filter((selected) => selected.id === song.id ); // filter out the selected song 
    setCurrentSong(selected[0]); 

  //   if(isPlaying){ // play the song when selecting it from the library
  //     const playPromise = audioRef.current.play();
  //     if(playPromise !== undefined){
  //         playPromise.then((audio) => {audioRef.current.play()});
  //     }
  // }
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
        <p className="index">{index + 1}</p>
        <p className="song-name">{song.name}</p>
        <p className="artist">{song.artist}</p>
    </div>
  );
}

export default Song;