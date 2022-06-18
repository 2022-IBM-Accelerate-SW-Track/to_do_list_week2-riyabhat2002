import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Riya Bhat</div>
            <div className="brief_description">
              Hello! My name is Riya Bhat and I am a junior studying at UW-Madison. I am double majoring in Computer engineering and Computer Science. A fun fact about me is that I jumped into the lake in -5 degree celsius.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
