import React, { Component } from "react";
import "./Card.css";
import home from "../../assets/images/home.svg";
import yandex from "../../assets/images/yandex.svg";
import small from "../../assets/images/small.svg";
import { Link } from "react-router-dom";
let cards = [
  {
    id: 1,
    image: home,
    title: "Quality Food",
    text: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
  },
  {
    id: 2,
    image: yandex,
    title: "Food Delivery",
    text: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
  },
  {
    id: 3,
    image: small,
    title: "Super Taste",
    text: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
  },
];

export default class Card extends Component {
  render() {
    return (
      <div className="card__page container">
        <Link className="feature" id="features">
          Features
        </Link>
        <h3>Food with a New Passion</h3>
        <div className="cards">
          {cards?.map((element) => (
            <div className="card" key={element.id}>
              <div className="card__img">
                <img src={element.image} alt={element.title} />
              </div>
              <h5>{element.title}</h5>
              <p>{element.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
