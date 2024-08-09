import React, { useState , useEffect } from 'react';
import './Home.css';
import home from '../../Images/home.png';
import message from '../../Images/mail.png';
import M from '../../Images/Reach_logo.webp';
import nots from '../../Images/inbox.png'
import Redirect from '../../Component/Redirect/Redirect';
import S from '../../Images/S_logo.jpg'
import stats from '../../Images/stats.png'
import more from '../../Images/more.png'
import search from '../../Images/search.png'
import Inbox from '../Inbox/Inbox';
import send from '../../Images/message.png'

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
        <img src={search} onClick={()=>ChangePath('/onebox')}/>
        <img src={message} alt="Message" onClick={()=>ChangePath('/onebox')} />
        <img src={send} onClick={()=>ChangePath('/onebox')}/>
        <img src={more} onClick={()=>ChangePath('/onebox')}/>
       
          
          <img src={nots} onClick={()=>ChangePath('/onebox/list')} />
          <img src={stats} onClick={()=>ChangePath('/onebox')}/>
        </div>
        <img src={S}  style={{borderRadius:'50%', width:'40px', height:'40px', marginBottom:'10px'}}/>
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
