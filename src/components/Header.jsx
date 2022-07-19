import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import "../css/header.scss";

const Header = () => {

  const [darkTheme, setDrakTheme] = useState(localStorage.getItem("theme") === null ? false : true);

  useEffect(() => {
    if(darkTheme === true) {
      localStorage.setItem("theme", "dark");
      document.querySelector("HTML").className = "dark";
    } else {
      localStorage.removeItem("theme");
      document.querySelector("HTML").className = "";
    }
  }, [darkTheme]);

  return (
    
        <div className="container">
          <header>
          <div className="header__content">
            <nav className="header__menu">
              <input type="checkbox" className="toggler"></input>
              <div className="hamburger"><div></div></div>
              <div className="menu">
                <ul className="header__list">
                  <li><a href="#">Обо мне</a></li>
                  <li><a href="#">Навыки</a></li>
                  <li><a href="#">Портфолио</a></li>
                  
                  {
                    darkTheme === true ? 
                    <MdDarkMode className="dark-mode" onClick={() => setDrakTheme(!darkTheme)}  /> : 
                    <MdOutlineDarkMode className="dark-mode__active" onClick={() => setDrakTheme(!darkTheme)}  />
                  }
                </ul>
              </div>
            </nav>
        </div>
        </header>
      </div>
    
  );
}

export default Header;
