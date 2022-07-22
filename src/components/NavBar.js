import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavBar.css';

export default function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <div className='nav'>
      <div className='nav_cont'>
        <Link to='/' className='logo'>
          Weekend Watch
        </Link>
        <div className='nav_left'>
          <Link to='/'>Movies</Link>
          <Link to='/'>TV Show</Link>
          <Link to='/'>People</Link>
          <Link to='/'>More</Link>
        </div>
        <div className='nav_right'>
          <Link to='/'>Log In</Link>
          <Link to='/'>Join Us</Link>
          <Link to='/'>
            <img src={require('../assets/search.png')} alt='logo_img' />
          </Link>
        </div>

        <button className='nav_btn' onClick={() => setShow(!show)}>
          <img src={require('../assets/menu2.png')} alt='menu_img' />
        </button>
      </div>
      {show ? (
        <div className='mobile_nav'>
          <Link to='/'>Movies</Link>
          <Link to='/'>TV Show</Link>
          <Link to='/'>People</Link>
          <Link to='/'>More</Link>
          <Link to='/'>Log In</Link>
          <Link to='/'>Join Us</Link>
        </div>
      ) : null}
    </div>
  );
}
