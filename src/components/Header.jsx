import React, { useState, useEffect, useRef } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import "../css/header.scss";

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

  function goTo(selector) {
    document.querySelector(`.${selector}`)
      .scrollIntoView({
        behavior: "smooth",
        block: "start"
      })

    setTimeout(() => ref.current.checked = false, 1000);
  }

  return (
    <header>
      <div className="container">
        <div className="header__content">
          <nav className="header__menu">
            <input ref={ref} type="checkbox" className="toggler"></input>
            <div className="hamburger"><div></div></div>
            <div className="menu">
              <ul className="header__list">
                <li onClick={() => goTo("about")}>Обо мне</li>
                <li onClick={() => goTo("skills")}>Навыки</li>
                <li onClick={() => goTo("portfolio")}>Портфолио</li>
                <li>
                  {
                    darkTheme === true ?
                      <MdDarkMode className="dark-mode" onClick={() => setDrakTheme(!darkTheme)} /> :
                      <MdOutlineDarkMode className="dark-mode__active" onClick={() => setDrakTheme(!darkTheme)} />
                  }
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
