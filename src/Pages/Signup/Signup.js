import React from "react";
import { useEffect } from "react";
import "./Signup.css";
import logo from "../Images/Logo.svg";
import Google from "../Images/Google-removebg-preview.png";

function Signup() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");
        if (token) {
          localStorage.setItem("jwtToken", token);
          console.log("Token stored:", token);
          // Optionally, you can redirect to a different page after storing the token
          // window.location.href = "/dashboard";
        }
      }, []);
    
      function Authenticate() {
        window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/home";
      }
    
  return (
    <div className="Main">
      <div className="Logo">
        <img src={logo}></img>
      </div>
      <div className="Line"></div>
      <div className="SignCard">
        <div className="Signup">
          <h2>Create a new Account</h2>
        <div className="Goo-outer">
          <div className="Google" onClick={Authenticate}>
            <img src={Google} />
            <p>Sign Up with Google</p>
            </div>
          </div>
          <div className="SignButton">
                <button>Create Account</button>
          </div>
          <div className="Text">
            <p>Already have an Account?</p>
            <span>Signin</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
