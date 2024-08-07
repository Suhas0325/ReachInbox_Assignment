

import React from 'react';
import './Home.css';
import home from '../Images/Home_fill.png';
import message from '../Images/message_logo-removebg-preview.png';
import M from '../Images/Reach_logo.webp';
import Message from '../Images/Message_logo.png';
import nots from '../Images/nots.png'

function Home() {
  function Logout() {
    localStorage.removeItem('jwtToken');
    console.log('Logged out');
    window.location.href = '/';
  }

  return (
    <div className="Main1">
      <div className="Side_Nav">
        <div className="M">
          <img src={M} alt="Logo" />
        </div>
        <div className="sidelogos">
          <img src={home} alt="Home" />
          <img src={message} alt="Message" />
          <img src={nots}/>
        </div>
        <button onClick={Logout}>Logout</button>
      </div>
      <div className="Content">
        <div className="Top_Nav">
          <p>OneBox</p>
        </div>
        <div className="Vector">
          <img src={Message} alt="Message" />
           <h2>It’s the beginning of a legendary sales pipeline</h2>
           <p>When you have inbound E-mails</p>
           <p>you’ll see them here</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
