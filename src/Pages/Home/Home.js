import React, { useState , useEffect } from 'react';
import './Home.css';
import home from '../../Images/Home_fill.png';
import message from '../../Images/message_logo-removebg-preview.png';
import M from '../../Images/Reach_logo.webp';
import nots from '../../Images/nots.png'
import Redirect from '../../Component/Redirect/Redirect';
import Email from '../Emails/Email';
import { NavLink } from 'react-router-dom';
import Inbox from '../Inbox/Inbox';

function Home() {

  const [path , Setpath] = useState('/onebox');

  function ChangePath(Path) {
    Setpath(Path);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("jwtToken", token);
      console.log("Token stored:", token);
    }
  }, []);


  return (
    <div className="Main1">
      <div className="Side_Nav">
        <div className="M">
          <img src={M} alt="Logo" />
        </div>
        <div className="sidelogos">
         <img src={home} alt="Home" onClick={()=>ChangePath('/onebox')}  />
          <img src={message} alt="Message" onClick={()=>ChangePath('/onebox')} />
          <img src={nots} onClick={()=>ChangePath('/onebox/list')} />
        </div>
        <button>Logout</button>
      </div>
      <div className="Content">
        <div className="Top_Nav">
          <p>OneBox</p>
        </div>
        { path==='/onebox' && <Redirect/>}
        {path==='/onebox/list' && <Inbox/>}
      
      </div>
    </div>
  );
}

export default Home;
