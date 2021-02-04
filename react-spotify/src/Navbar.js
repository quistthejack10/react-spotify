import React, { useState } from 'react';
import './Navbar.css';

function Navbar () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


return(
    <nav className="navbar">
    <div className="navbar--logo-holder">
      <h1>React Spotify Player</h1>
    </div>
    <ul className="navbar--link">
      <a className="navbar--link-item" href="https://quistthejack10.github.io/jacksonquist.github.io/" onClick={handleClick}>About Me</a>
    </ul>
  </nav>
)
}

export default Navbar;
    
