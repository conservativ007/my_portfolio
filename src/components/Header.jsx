import React, { useState, useEffect, useRef } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { WiMoonAltWaningCrescent5 } from 'react-icons/wi';
import { FiSun } from 'react-icons/fi';

import { goTo } from '../functions/goTo';

import "../css/header.scss";
import "../css/perspectivePage.scss";

const Header = () => {

  const [darkTheme, setDrakTheme] = useState(localStorage.getItem("theme") === null ? false : true);
  const ref = useRef(null);

  useEffect(() => {
    if (darkTheme === true) {
      localStorage.setItem("theme", "dark");
      document.querySelector("HTML").className = "dark";
    } else {
      localStorage.removeItem("theme");
      document.querySelector("HTML").className = "";
    }
  }, [darkTheme]);


  useEffect(() => {
    let rootDocument = document.querySelector("#root");
    let container = document.querySelector(".container");

    ref.current.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("click rootDocument");
      rootDocument.classList.add("modalview");
      rootDocument.classList.add("animate");
    })

    container.addEventListener("click", () => {
      rootDocument.classList.remove("animate");
      setTimeout(() => rootDocument.classList.remove("modalview"), 400);
    })
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <nav className="header__menu">
          <div ref={ref} className="hamburger"><div></div></div>
          <ul>
            <li onClick={(e) => goTo(e, "about", true)}>Обо мне</li>
            <li onClick={(e) => goTo(e, "skills", true)}>Навыки</li>
            <li onClick={(e) => goTo(e, "portfolio", true)}>Портфолио</li>
            <li>
              {
                darkTheme === true ?
                  <FiSun onClick={() => setDrakTheme(!darkTheme)} /> :
                  <WiMoonAltWaningCrescent5 onClick={() => setDrakTheme(!darkTheme)} />
              }
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
