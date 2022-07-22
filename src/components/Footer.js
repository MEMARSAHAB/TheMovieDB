import { Link } from 'react-router-dom';

import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_top'>
        <div className='footerBox1'>
          <div className='footer_logo'>
            <img src={require('../assets/tv2.png')} alt='logo_img' />
            <h2>Weekend Watch</h2>
          </div>
          <div className='footer_add'>
            <img src={require('../assets/location.png')} alt='loc_img' />
            <p>24, Vaishnavi Centre, Raja Park, 51, Dhanana, Panipat, Haryana, Pincode-154419</p>
          </div>
        </div>

        <div className='footerBox footerBox2'>
          <h2>THE BASICS</h2>
          <a href='/'>About Us</a>
          <a href='/'>Contact Us</a>
          <a href='/'>Support</a>
          <a href='/'>API</a>
        </div>

        <div className='footerBox footerBox3'>
          <h2>GET INVOLVED</h2>
          <a href='/'>Contribution Guideline</a>
          <a href='/'>Add New Movie</a>
          <a href='/'>Add New TV Show</a>
        </div>

        <div className='footerBox footerBox4'>
          <h2>COMMUNITY</h2>
          <a href='/'>Guideline</a>
          <a href='/'>Discussion</a>
          <a href='/'>Leaderboard</a>
          <a href='/'>Twitter</a>
        </div>

        <div className='footerBox footerBox5'>
          <h2>LEGAL</h2>
          <a href='/'>Terms of use</a>
          <a href='/'>API Terms of use</a>
          <a href='/'>Privacy Policy</a>
        </div>
      </div>

      <div className='footer_bottom'>
        <p>
          &copy;2022 STAR. All Rights Reserved. Weekend watch's all related Movies and TV Shoes are
          part of copyright.
        </p>

        <select>
          <option>🇮🇳 India</option>
        </select>
      </div>
    </footer>
  );
}
