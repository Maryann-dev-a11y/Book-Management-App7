import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/join-bookclub">Join a Book Club</Link>
        <Link to="/discuss">Discuss</Link>
        <Link to="/create-bookclub">Create a Book Club</Link>
        <Link to="/bookclubs">Book Clubs</Link>
      </nav>
    );
}

export default Navbar;