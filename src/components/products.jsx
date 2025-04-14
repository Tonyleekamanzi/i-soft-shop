import React from "react";
export default function ProductCard(props) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={props.image}
          className="product-image"
          alt={props.name}
          loading="lazy"
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{props.name}</h3>
        <div className="product-rating">
          ⭐ {props.rating.stars} <span>({props.rating.count})</span>
        </div>
        <div className="product-price">
          ${(props.priceCents / 100).toFixed(2)}
        </div>
        <p className="product-tags">{props.keywords.join(" · ")}</p>
      </div>
      <div>
        <button className="add-chat-button">Add to Chat</button>
      </div>
    </article>
  );
}
