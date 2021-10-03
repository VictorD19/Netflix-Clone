import React, { useState } from "react";
import "./navbar.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
  const [visible, setvisible] = useState(0);
  const [width, setwidth] = useState(0);
  const [color, setcolor] = useState('#fff');
  
  const search = () => {
    setvisible((visible) => {
      if (visible === 0) {
        setvisible(1);
        setwidth(250)
        setcolor('#424242')
      } else {
        setvisible(0);
        setwidth(0)
        setcolor('#fff')


      }
    });
  };

  return (
    <header className={black ? 'black': ''}>
      <div className="navbar-part-left">
        <a href="/">
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="logo"
          />
        </a>
        <nav className="navbar-item">
          <ul>
            <li>Inicio</li>
            <li>Series</li>
            <li>Filmes</li>
            <li>Bombando</li>
          </ul>
        </nav>
      </div>
      <div className="navbar-part-right">
        <div className="navbar-search">
          <input 
                type="text" 
                id="search" 
                style={{ opacity: visible,
                         width:`${width}px`}} 
                placeholder='Nome, gente, genero' />
          <i class="fas fa-search" onClick={() => search()} style={{color:color}}></i>
        </div>
        <div className="navbar-notification">
          <i class="fas fa-bell"></i>
        </div>
        <div className="navbar-profile">
          <div className="image-profile">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
          </div>
          <div className="menu-account">
            <i class="fas fa-sort-down"></i>
          </div>
        </div>
      </div>
    </header>
  );
};
