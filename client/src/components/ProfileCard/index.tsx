import React from "react";
import "./index.scss";

export default function ProfileCard() {
  return (
    <div>
      <input id="slider" className="customSlider" type="checkbox" />
      <label htmlFor="slider" />

      <div className="wrapper">
        <div className="top-icons">
          <i className="fas fa-long-arrow-alt-left" />
          <i className="fas fa-ellipsis-v" />
          <i className="far fa-heart" />
        </div>

        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w"
            className="thumbnail"
          />
          <div className="check">
            <i className="fas fa-check" />
          </div>
          <h3 className="name">Beverly Little</h3>
          <p className="title">Javascript Developer</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aliquam aliquid porro!
          </p>
          <button type="button" className="btn">
            Hire Me
          </button>
        </div>

        <div className="social-icons">
          <div className="icon">
            <a href="/">
              <i className="fab fa-dribbble" />
            </a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>

          <div className="icon">
            <a href="#">
              <i className="fab fa-behance" />
            </a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>

          <div className="icon">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <h4>12.8k</h4>
            <p>Followers</p>
          </div>
        </div>
      </div>

      <div className="concept">
        concept by
        <a
          href="https://dribbble.com/shots/4346772-Profile-Card"
          target="_blank"
        >
          <i className="fab fa-dribbble" /> Vijay Verma
        </a>
      </div>
    </div>
  );
}
