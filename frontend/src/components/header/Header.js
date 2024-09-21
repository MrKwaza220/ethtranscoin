import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Login from '../../pages/login/Login';
import Signup from '../../pages/signup/Signup';
import './Header.css'; // Import the CSS file for styles

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Changed from isSignup to isLogin

  const toggleModal = () => setShowModal(!showModal);
  const switchForm = () => setIsLogin(!isLogin);

  return (
    <header>
        <div className="container">
            
      <h1>Transcoin Solutions</h1>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={() => { setIsLogin(true); toggleModal(); }}>Login</button>
        <button onClick={() => { setIsLogin(false); toggleModal(); }}>Signup</button>
      </nav>
      {showModal && (
        <div className="modal">
          {isLogin ? (
            <Login onClose={toggleModal} switchForm={switchForm} />
          ) : (
            <Signup onClose={toggleModal} switchForm={switchForm} />
          )}
        </div>
      )}
        </div>
    </header>
  );
}

export default Header;
