import React, { useRef, useState } from 'react';
import './NavBar.css';
import avatar from '../Hero/images/avatarProfile.jpeg';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  const [navState, setNavState] = useState('Home');

  return (
    <nav className='nav-container container'>
      <div>
        <li><a href='#home'><img src={avatar} alt="avatar" /></a></li>
        <FaBars className='nav-open' onClick={openMenu} />
      </div>
      <ul ref={menuRef} className='list-container'>
        <AiOutlineClose onClick={closeMenu} className='nav-close' />
        <li>
          <a href="#home" onClick={() => setNavState('Home')} className={navState === 'Home' ? 'active' : ''}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => setNavState('About Me')} className={navState === 'About Me' ? 'active' : ''}>About Me</a>
        </li>
        <li>
          <a href="#service" onClick={() => setNavState('Services')} className={navState === 'Services' ? 'active' : ''}>Services</a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setNavState('Portfolio')} className={navState === 'Portfolio' ? 'active' : ''}>Portfolio</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setNavState('Contact')} className={navState === 'Contact' ? 'active' : ''}>Contact</a>
        </li>
      </ul>
      <div className='connect'>
        <li className='li'><a href='#contact'>Connect With me </a></li>
      </div>
    </nav>
  );
};

export default NavBar;
