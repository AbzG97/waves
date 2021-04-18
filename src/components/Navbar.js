import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import CreatePlaylistModal from './CreatePlaylistModal';


function Navbar({songs, setSongs}) {
  const playlist_data = [{
    id: uuidv4(),
    name: String,
    songs: []
  }];
  const [playlist, setPlaylist] = useState(playlist_data);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const viewFavouritesHandler = () => {
    const favourites = songs.filter((state) => state.favourite === true);
    setSongs(favourites);
  }

  const createPlaylist = () => {

  }

  const viewAll = () => {
    setSongs(JSON.parse(localStorage.getItem('data')));
  }
  return (
      <div className="navbar">
        <div className="your-library">
            <h2>Waves Music App</h2>
            <div className="horzontal-line">
              <hr/>
            </div>
              <p onClick={viewAll}>All songs</p>
              <p onClick={viewFavouritesHandler}>Favourties</p>
              
        </div>
        {/* <div>
            <input name="playlist-name"/>
            <button onClick={createPlaylist}/>
        </div> */}
      </div>
    
  );
}

export default Navbar;