import React, {useState} from 'react';


function Navbar() {
  return (
    <div className="navbar">
      <div className="your-library">
          <h2>Your library</h2>
            <p>Songs</p>
            <p>Albums</p>
            <p>Artists</p>
      
         
      </div>
      <div className="horzontal-line">
        <hr/>
      </div>
      

      <div className="playlist">
          <h2>Playlists</h2>
          <p>Favourties</p>
          <p>Chillmix</p>
          <p>Rap / Hiphop</p>

      </div>
    </div>
  );
}

export default Navbar;