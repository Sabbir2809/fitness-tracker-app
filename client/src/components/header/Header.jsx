import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <Link to='/'>Home</Link>
        <Link to='/fitness'>Fitness Tracking</Link>
        <Link to='/goals'>Goal</Link>
        <Link to='/community'>Community</Link>
        <Link to='/personalization'>Personalization</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/signup'>signUp</Link>
        <button className='nav__btn nav__close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav__btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
