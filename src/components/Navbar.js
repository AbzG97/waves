import React from 'react';


function Navbar({songs, setSongs}) {

  const viewFavouritesHandler = () => {
    const favourites = songs.filter((state) => state.favourite === true);
    setSongs(favourites);

  }

  const viewAll = () => {
    setSongs(JSON.parse(localStorage.getItem('data')));
  }
  return (
    <div className="navbar">
      <div className="your-library">
          <h2>Your library</h2>
            <p onClick={viewAll}>Songs</p>
            <p>Albums</p>
            <p>Artists</p>
      
         
      </div>
      <div className="horzontal-line">
        <hr/>
      </div>
      

      <div className="playlist">
          <h2>Playlists</h2>
          <p onClick={viewFavouritesHandler}>Favourties</p>
          <p>Chillmix</p>
          <p>Rap / Hiphop</p>

      </div>
    </div>
  );
}

export default Navbar;