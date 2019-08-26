import React from "react";
import "./index.css";

export default function ProfileCard() {
  return (
    <div>
      <div className="wrapper">
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w"
            className="thumbnail"
          />
          <h3 className="name">Beverly Little</h3>
          <p className="title">Javascript Developer</p>
          <p className="title">Javascript Developer</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aliquam aliquid porro!
          </p>
          <button type="button" className="btn">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}
