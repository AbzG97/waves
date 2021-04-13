import React, {useState, useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faStepBackward, faStepForward, faPauseCircle } from '@fortawesome/free-solid-svg-icons'


function Player({currentSong, isPlaying, setIsPlaying}) {
  // auto play song everytime the current song changes
  useEffect(() => {
    if(isPlaying){ // play the song when selecting it from the library
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined){
          playPromise.then((audio) => {audioRef.current.play()});
      }
  }
  }, [currentSong])


  const audioRef = useRef(null);
  const [songTime, setSongTime] = useState({
    current: 0,
    duration: 0
  });

  const playSelectedSongHandler = () => {
    if(isPlaying){
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }  else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }

  const updateSongUpdateHandler = (e) => {
    //console.log(e.target.currentTime);
    setSongTime({
      current: e.target.currentTime,
      duration: e.target.duration
    });
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value; // set the value of drag to equal the time of currentTime of the song
    setSongTime({...songTime, current: audioRef.current.currentTime}); // update the time
  }

  const formatTime = (time) => {
    return ( Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) ) ;
  }
  return (
    <div className="player">
      <div className='play-control'>
        <FontAwesomeIcon  className='icons' icon={faStepBackward} size='2x'/>
        <FontAwesomeIcon onClick={playSelectedSongHandler} className='icons' icon={isPlaying ? faPauseCircle : faPlayCircle} size='2x'/>
        <FontAwesomeIcon className='icons' icon={faStepForward} size='2x' />

      </div>
      <div className='time-control'>
        <p>{formatTime(songTime.current)}</p>
        <input onChange={dragHandler} type="range"  min={0} max={songTime.duration || 0} value={songTime.current} />
        <p>{formatTime(songTime.duration || 0)}</p>
      </div>
      <audio onTimeUpdate={updateSongUpdateHandler} ref={audioRef} src={currentSong.audio}/>
    </div>
   
  );
}

export default Player;