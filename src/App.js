import data from './utils';
import React, {useState, useEffect, useRef} from 'react';
import './styles/app.scss';
import Navbar from './components/Navbar';
import Library from './components/Library';
import Player from './components/Player';
import CurrentSong from './components/CurrentSong';



function App() {
 
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favourtieSongs, setFavouriteSongs] = useState([]);
  const [songTime, setSongTime] = useState({
    current: 0,
    duration: 0
  });

  const audioRef = useRef(null);

  const getLocalStorageData = () => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify([]));
    } else {
      let LocalStorageData = JSON.parse(localStorage.getItem("data"));
      setSongs(LocalStorageData);
    }
  };
  useEffect(() => {
    getLocalStorageData();
  }, []);

  const updateSongUpdateHandler = (e) => {
    //console.log(e.target.currentTime);
    setSongTime({
      current: e.target.currentTime,
      duration: e.target.duration
    });
  }

  return (   
  
    <div className="App">
      <div className="bg-image"></div>
      <Navbar songs={songs} setSongs={setSongs}/>

      <CurrentSong currentSong={currentSong}/>

      <Library isPlaying={isPlaying} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} setSongs={setSongs}
      favourtieSongs={favourtieSongs} setFavouriteSongs={setFavouriteSongs} audioRef={audioRef} />

      <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} 
      currentSong={currentSong} setCurrentSong={setCurrentSong} audioRef={audioRef} songTime={songTime} setSongTime={setSongTime}/>

      <audio onTimeUpdate={updateSongUpdateHandler} ref={audioRef} src={currentSong.audio}/>
    </div>
  );
}

export default App;
