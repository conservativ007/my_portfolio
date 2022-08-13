import React, { useState, useEffect, useRef } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

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
    <header>
      <div className="header__content">
        <nav className="header__menu">
          {/* <input ref={ref} type="checkbox" className="toggler"></input> */}
          <div ref={ref} className="hamburger"><div></div></div>
          {/* <li onClick={() => goTo("about")}>Обо мне</li>
              <li onClick={() => goTo("skills")}>Навыки</li>
              <li onClick={() => goTo("portfolio")}>Портфолио</li> */}
          {/* <li>
                {
                  darkTheme === true ?
                    <MdDarkMode className="dark-mode" onClick={() => setDrakTheme(!darkTheme)} /> :
                    <MdOutlineDarkMode className="dark-mode__active" onClick={() => setDrakTheme(!darkTheme)} />
                }
              </li> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
