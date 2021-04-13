import data from './utils';
import React, {useState} from 'react';
import './styles/app.scss';
import Navbar from './components/Navbar';
import Library from './components/Library';
import Player from './components/Player';


function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);


  return (   
  
    <div className="App">
      <div className="bg-image"></div>
      <h1>Waves</h1>
      <Navbar/>
      <Library isPlaying={isPlaying} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} setSongs={setSongs} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
    </div>
  );
}

export default App;
