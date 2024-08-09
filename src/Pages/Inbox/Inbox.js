import React, { useState, useEffect } from "react";
import { getMailList } from "../Actions";
import "./Inbox.css";
import { useLocation } from 'react-router-dom';  // Adjusted import statement

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
            <h1>Messages</h1>
           </div>
        </div>
    );
}

export default Inbox;
