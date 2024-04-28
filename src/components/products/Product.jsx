import axios from "../api/index";
import "./Product.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import img1 from "../../assets/images/img1.svg";
import img2 from "../../assets/images/img2.svg";
import img3 from "../../assets/images/img3.svg";
import img4 from "../../assets/images/img4.svg";
import img5 from "../../assets/images/img5.svg";
import img6 from "../../assets/images/img6.svg";
import like1 from "../../assets/images/like.svg";
import women from "../../assets/images/women1.svg";
import rating from "../../assets/images/like.yulduzcha.svg";

export const data = [
  {
    id: 1,
    image: img1,
    title: "Vegie Muffen",
    price: 16,
    desc: "There are many things are needed to start the Fast Food Business.",
    like: like1,
  },
  {
    id: 2,
    image: img2,
    title: "Salads",
    price: 12,
    desc: "There are many things are needed to start the Fast Food Business.",
    like: like1,
  },
  {
    id: 3,
    image: img3,
    title: "Burger",
    price: 10,
    desc: "There are many things are needed to start the Fast Food Business.",
    like: like1,
  },
  {
    id: 4,
    image: img4,
    title: "Delmonico Steak dish",
    price: 14,
    desc: "There are many things are needed to start the Fast Food Business.",
    like: like1,
  },
  {
    id: 5,
    image: img5,
    title: "Egg Masala  ",
    price: 9,
    desc: "There are many things are needed to start the Fast Food Business.",
    like: like1,
  },
  {
    id: 6,
    image: img6,
    title: "Peach Melba dish",
    price: 15,
    desc: "There are many things are needed to start the Fast Food Business.",
    like: like1,
  },
];

export class Product extends Component {
  render() {
    return (
      <div className="container">
        <Link id="menu" to={"#menu"}>
          Menu
        </Link>
        <h5 className="food-text">Food Full of treaty Love</h5>
        <p className="product_text">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,
        </p>
        <div className="products">
          {data?.map((value) => (
            <div className="product" key={value.id}>
              <img src={value.image} alt={value.title} />
              <div className="product_about">
                <h4 className="name">{value.title} </h4>
                <div className="price">{value.price}$</div>
              </div>
              <div className="desc">{value.desc}</div>
              <div className="rating">
                <button>+</button>
                <div>
                  <img src={value.like} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="more-btn">Learn More</button>
        <Link id="menu1">Testimonial</Link>
        <h5 className="food-text1">Making Food great again and again</h5>
        <p className="product_text1">
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers, Effective Product catlogues etc
          to make your.
        </p>
        <div className="women_about">
          <img src={women} alt="women" />
        </div>

        <p className="product_text2">
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers, Effective Product catlogues etc
          very successful to make your.
        </p>
        <div className="likes">
          <img src={rating} alt="women" />
        </div>
        <h4 className="userName">Augusta W. Reynoso</h4>
      </div>
    );
  }
}

export default Product;
