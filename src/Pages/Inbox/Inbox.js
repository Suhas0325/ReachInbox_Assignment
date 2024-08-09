import React, { useState, useEffect } from "react";
import { getMailList } from "../Actions";
import "./Inbox.css";
import Yellow from '../../Images/Yellow.png'
import { useLocation } from 'react-router-dom';
import arrow from '../../Images/down-arrow-56-removebg-preview.png'
  // Adjusted import statement

function Inbox() {
    const token = localStorage.getItem("jwtToken");
    const getData =  () => {
        getMailList(token).then((res)=>{
          console.log(res)
        })
    };

    return (
        <div className="Vector1">
            <div className="Inboxes">
                <h2>All Inboxes</h2>
                <div className="Indown">
                    <p>25/25</p>
                    <p style={{ color: 'grey' }}>Inboxes Selected</p>
                </div>
                <div className="SearchBar">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="bar26">
                    <span>26</span>
                    <p>New Replies</p>
                    <div className="Newsets">
                        <p>Newest</p>
                    </div>
                </div>
                <div className="Line1"></div>
            </div>
           <div className="Messages">
               <div className="MailBox">
                       <div className="Detss">
                        <h3 style={{color:'white', fontFamily:'open sans'}}>Orlando</h3>
                        <p style={{color:'grey'}}>orladom@gmail.com</p>
                       </div>
                      <div className="Status">
                        <img src={Yellow}/>
                                Completed
                        <img src={arrow}  style={{width:'30px', height:'30px'}}/>
                      </div>
               </div>
             
               
               <div className="Outbox">
               <div className="Line2"></div>
               <div className="MailBox1">

                <div className="Box2">
                    <h3 >New Product Launch</h3>
                    <p>from : jeanne@icloud.com cc : lennon.j@mail.com</p>
                    <p>to : lennon.j@mail.com</p>
                </div>
                <div className="Box3">
                         <p>Hi {'{FIRST_NAME}'}</p>
                         <p>
                         Hi {'{FIRST_NAME}'},

I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.
                         </p>
                </div>
               </div>
               

               </div>
           </div>
           <div className="Right">
            <div className="LeadDEts">
                     <h2>Lead Details</h2>
            </div>
           </div>
        </div>
    );
}

export default Inbox;
