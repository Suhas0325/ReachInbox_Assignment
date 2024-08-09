import React, { useState } from 'react';
import './Email.css';
import home from '../../Images/Home_fill.png';
import message from '../../Images/message_logo-removebg-preview.png';
import M from '../../Images/Reach_logo.webp';
import nots from '../../Images/nots.png'
import Redirect from '../../Component/Redirect/Redirect';
import { NavLink } from 'react-router-dom';
import Inbox from '../Inbox/Inbox';

function Email() {

 
 
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
         <NavLink to='/onebox'><img src={home} alt="Home"  /></NavLink> 
          <img src={message} alt="Message" />
          <NavLink to='/onebox/list'><img src={nots} /></NavLink> 
        </div>
        <button onClick={Logout}>Logout</button>
      </div>
      <div className="Content">
        <div className="Top_Nav">
          <p>OneBox</p>
        </div>
       <Inbox/>
      </div>
    </div>
  );
}

export default Email;
