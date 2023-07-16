import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 153)}...`}</p>
        <button
          type="button"
          className="info-btn"
          style={{ marginBottom: "1rem" }}
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show less" : "Read more..."}
        </button>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
