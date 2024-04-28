import React, { Component } from "react";
import "../hero/Hero.css";
import { Link } from "react-router-dom";
import girl from "../../assets/images/girl.svg";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.section1Ref = React.createRef();
  }

  scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <div className="hero__page">
        <div className="container hero-section about_section">
          <div>
            <img src={girl} alt="girl " />
          </div>
          <div>
            <Link
              id="about"
              to={"#"}
              onClick={() => this.scrollToSection(this.section1Ref)}
            >
              About us
            </Link>
            <h3>
              Food Stalls with Persons but to Product marketing plane catlogues
              etc to.
            </h3>
            <p className="pararaph__text">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also equipment
              make your marketing plane Effective.
            </p>
            <div className="hero-btn">
              <button className="btn1"> Read More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
