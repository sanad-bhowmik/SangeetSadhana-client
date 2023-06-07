import React from 'react';
import './Footer.css';
import logo from '../../assets/image/logo.png'
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='mt-[50%]'>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="footer-content">
        <div className="logo">
          <img className='h-24' src={logo} alt="Your Web Logo" />
        </div>
        <ul className="social_icon">
          <li>
            <Link to="https://www.facebook.com/"><FaFacebookSquare /></Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/"><FaInstagram /></Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/"><FaYoutube /></Link>
          </li>
        </ul>
      </div>
      <p>Copyright | Sanad Bhowmik | @2023</p>
    </footer>
  );
}

export default Footer;
