import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 0',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1000,
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  };

  const linkStyle = {
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
    width: '100%',
  };

  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={{ flex: 1 }}>
          <Link to="/instructions" style={linkStyle}>Instructions</Link>
        </li>
        <li style={{ flex: 1 }}>
          <Link to="/chathome" style={linkStyle}>Chat</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
