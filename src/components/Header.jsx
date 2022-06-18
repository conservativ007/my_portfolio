import React from 'react';
import "../css/header.scss";

const Header = () => {
  return (
    <header>
    <div className="header_head">
      <div className="container">
        <div className="head_inner">
          <div className="logo">Максим</div>
          <ul>
            <li><a href="#">Обо мне</a></li>
            <li><a href="#">Портфолио</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="header_body"></div>
  </header>
  );
}

export default Header;
