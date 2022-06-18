import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import "../css/header.scss";

const Header = () => {

  const [darkTheme, setDrakTheme] = useState(localStorage.getItem("theme") === null ? false : true);

  useEffect(() => {
    console.log(darkTheme)
    if(darkTheme === true) {
      localStorage.setItem("theme", "dark");
      document.querySelector("HTML").className = "dark";
    } else {
      localStorage.removeItem("theme");
      document.querySelector("HTML").className = "";
    }
  }, [darkTheme])

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
              
              {
                darkTheme === true ? 
                <MdDarkMode className="dark-mode" onClick={() => setDrakTheme(!darkTheme)}  /> : 
                <MdOutlineDarkMode className="dark-mode__active" onClick={() => setDrakTheme(!darkTheme)}  />
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="header_body"></div>
    </header>
  );
}

export default Header;
