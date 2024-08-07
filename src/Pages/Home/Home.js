

import React from 'react';
import './Home.css';
import home from '../Images/Home-logo-removebg-preview.png';
import message from '../Images/message_logo-removebg-preview.png';
import M from '../Images/Reach_logo.webp';
import Message from '../Images/Message_logo.png';

function Home() {
  function Logout() {
    localStorage.removeItem('jwtToken');
    console.log('Logged out');
    window.location.href = '/';
  }

  return (
    <div className="Main">
      <div className="Side_Nav">
        <div className="M">
          <img src={M} alt="Logo" />
        </div>
        <div className="sidelogos">
          <img src={home} alt="Home" />
          <img src={message} alt="Message" />
        </div>
        <button onClick={Logout}>Logout</button>
      </div>
      <div className="Content">
        <div className="Top_Nav">
          <p>OneBox</p>
        </div>
        <div className="Vector">
          <img src={Message} alt="Message" />

        </div>
      </div>
    </div>
  );
}

export default Home;
