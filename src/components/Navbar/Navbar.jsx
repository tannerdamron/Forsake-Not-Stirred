import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../App.css';

function Navbar() {
  return (
    <div className='Nav'>
      <h2>Navbar</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/events">
        <button>Events Page</button>
      </Link>
    </div>
  );
}

export default Navbar;
