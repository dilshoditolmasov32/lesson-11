import React, { Component } from "react";
import "./Hero.css";
import heroImg from "../../assets/images/tova.svg";
export default class Hero extends Component {
  render() {
    return (
      <div className="hero__page">
        <div className="container hero-section">
          <div>
            <h3>Making time a good time by making food the good food.</h3>
            <p className="pararaph__text">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment,
            </p>
            <div className="hero-btn">
              <button className="btn1">Order Now</button>
              <button className="btn2">Food Details</button>
            </div>
          </div>
          <div>
            <img src={heroImg} alt="hero-img" />
          </div>
        </div>
      </div>
    );
  }
}
