import React, { Component } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
export default class Contact extends Component {
  render() {
    return (
      <div className="contact__page">
        <div className="container contact__about">
          <h6>
            <Link id="contact">Contact </Link>
          </h6>
          <h4>
            Food Stalls with Persons but also specialized equipment, Skills to
            manage.
          </h4>
          <form className="form__input">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Enter your message"
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }
}
