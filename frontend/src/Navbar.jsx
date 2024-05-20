import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    transition={{ duration: 0.5, delay: 9 }}
    // className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
  >
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
    </motion.div>
  );
}

export default Navbar;
