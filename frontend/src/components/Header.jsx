import React from 'react';
import logo from './../images/logo.png'
import {Link} from 'react-router-dom'
import MyButton from './button/MyButton'
const Header = () => {
  return (
      <div className='header'>
        <div style={{width: '100px'}}/>
        <img src={logo} alt=""/>
        <nav className='navigation'>
          <Link className='link' to="/">
            <MyButton>new Race</MyButton>
            
          </Link>
          <Link className='link' to="/map">
            <MyButton>Map</MyButton>
          </Link>
        </nav>
      </div>
  );
};

export default Header;
