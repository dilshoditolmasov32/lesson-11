import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/images/header-logo.svg";

const footerData = [
  {
    id: 1,
    title: "Home",
    link: [
      "Landingpage",
      "Documentation",
      "Referral Program",
      "UI & UX Design",
      "Web Design",
    ],
  },

  {
    id: 2,
    title: "Menu",
    link: [
      "Landingpage",
      "Documentation",
      "Referral Program",
      "UI & UX Design",
      "Web Design",
    ],
  },

  {
    id: 3,
    title: "Company",
    link: ["Landingpage", "Documentation", "Referral Program"],
  },
];

export default class Footer extends Component {
  render() {
    return (
      <div className="footer__page">
        <div className="container footer-section">
          <div className="footer__about">
            <h3>
              <img src={logo} alt="logo" />
            </h3>
            <Link>www.company name.com</Link>
            <Link>dilshoditolmasov32@gmail.com</Link>
            <Link>Phone: +998 93 571 14 42</Link>
          </div>
          {footerData?.map((element) => (
            <div key={element.id}>
              <h3>{element.title}</h3>
              {element.link?.map((value, inx) => (
                <Link key={inx}>{value}</Link>
              ))}
            </div>
          ))}
        </div>

        <div></div>
      </div>
    );
  }
}
