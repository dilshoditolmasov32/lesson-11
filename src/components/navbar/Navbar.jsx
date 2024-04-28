import React, { Component } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/header-logo.svg";
import { Turn as Hamburger } from "hamburger-react";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div className="navbar__page">
        <div className="container navbar-section">
          <ul>
            <li>
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <NavLink to={"#home"} id="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"#about"}>About us</NavLink>
            </li>
            <li>
              <NavLink to={"#menu"}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={"#features"}>Features</NavLink>
            </li>
            <li>
              <NavLink to={"#contact"}>Contact us</NavLink>
            </li>
          </ul>
          <button onClick={this.toggleMenu} id="menu-btn">
            <Hamburger />
          </button>
          <div>
            <button className="btn__navbar">Booking Now</button>
          </div>
        </div>
      </div>
    );
  }
}
