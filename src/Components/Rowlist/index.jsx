import React, { useState } from "react";
import "./rowlist.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ items, title }) => {
  const [scrollx, setscrollx] = useState(0);

  const handleNextMovie = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    const wihtTotal = items.results.length * 150

    if((window.innerWidth - wihtTotal) > x ){
      x = (window.innerWidth - wihtTotal) - 60;
    }
    setscrollx(x);

  };
  // seta da ver antes
  const handlePreviousMovie = () => {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
        x = 0;
    }
    setscrollx(x);
  };

  return (
    <div className="list--row-container">
      <h2>{title}</h2>

      {/* arrows  */}
      <div className="list--after" onClick={handleNextMovie}>
        <i class="fas fa-chevron-right"></i>
      </div>
      <div className="list--before" onClick={handlePreviousMovie}>
        <i class="fas fa-chevron-left"></i>
      </div>

      <div className="list--row--main" >
        <div
          className="list--row-list"
          style={{ marginLeft: scrollx, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className="list--row--item" key={key} id={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt="img filme"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
