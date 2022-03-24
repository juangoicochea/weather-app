import React from 'react';
import Logo from '../img/icon-white-01.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className='menubar'>
      <div className='flex'>
        <div className='tamano'>
          <Link to='/'>
            <img className='logoHenry' src={Logo} alt="Logo Juan Goicochea" />
          </Link>
          <Link to='/'>
            <span className='colorspan'>Weather App</span>
          </Link>
        </div>
        <div className="centerEl">
          <div className="centerEl1">
            <Link to='/about'>
              <span className='aboutMe'>About me</span>
            </Link>
          </div>
          <div className="centerEl2">
            <SearchBar onSearch={onSearch}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;