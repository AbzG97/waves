import data from './utils';
import React, {useState, useEffect} from 'react';
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

  // const filtered_fav_songs = songs.filter((state) => state.favourite === true);
  // // setFavouriteSongs(...filtered_fav_songs);
  // console.log(filtered_fav_songs);
  // setFavouriteSongs(filtered_fav_songs[0]);



  return (   
  
    <div className="App">
      <div className="bg-image"></div>
      <h1>Waves</h1>
      <Navbar songs={songs} setSongs={setSongs}/>
      <CurrentSong currentSong={currentSong}/>
      <Library isPlaying={isPlaying} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} setSongs={setSongs}
      favourtieSongs={favourtieSongs} setFavouriteSongs={setFavouriteSongs} />
      <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;
