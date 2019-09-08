import React from "react";
import "./index.css";

export default function ArticleCard() {
  return (
    <div className="wrapper">
      <div className="card radius shadowDepth1">
        <div className="card__image border-tlr-radius">
          <img
            src="http://lorempixel.com/400/200/sports/"
            alt="image"
            className="border-tlr-radius"
          />
        </div>

        <div className="card__content card__padding">
          <div className="card__share">
            <div className="card__social">
              <a className="share-icon facebook" href="#">
                <span className="fa fa-facebook"></span>
              </a>
              <a className="share-icon twitter" href="#">
                <span className="fa fa-twitter"></span>
              </a>
              <a className="share-icon googleplus" href="#">
                <span className="fa fa-google-plus"></span>
              </a>
            </div>

            <a id="share" className="share-toggle share-icon" href="#"></a>
          </div>

          <div className="card__meta">
            <a href="#">Web Design</a>
            <time>28 Şub</time>
          </div>

          <article className="card__article">
            <h2>
              <a href="#">Material Design Card - For Blog Post Article</a>
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              harum... Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ducimus harum.
            </p>
          </article>
        </div>

        <div className="card__action">
          <div className="card__author">
            <img src="http://lorempixel.com/40/40/sports/" alt="user" />
            <div className="card__author-content">
              <a href="#">Enes Sahin</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
