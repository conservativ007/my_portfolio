import React, { useState, useEffect, useRef } from 'react';

import { WiMoonAltWaningCrescent5 } from 'react-icons/wi';
import { FiSun } from 'react-icons/fi';

import { goTo } from '../functions/goTo';

import "../css/header.scss";
import "../css/perspectivePage.scss";

import data from "../../assets/data/data.json";
import { useDispatch, useSelector } from 'react-redux';

import { actionLanguage } from '../store/languageReducer';
import SwitchLanguages from './SwitchLanguages.jsx';

const Header = () => {

  const [darkTheme, setDrakTheme] = useState(localStorage.getItem("theme") === null ? false : true);
  const ref = useRef(null);

  const dispatch = useDispatch();
  const language = useSelector(state => state.languageReducer);

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
            <li onClick={(e) => goTo(e, "about", true)}>{data[language].header[0]}</li>
            <li onClick={(e) => goTo(e, "skills", true)}>{data[language].header[1]}</li>
            <li onClick={(e) => goTo(e, "portfolio", true)}>{data[language].header[2]}</li>
            <li onClick={() => dispatch(actionLanguage())}>
              <SwitchLanguages />
            </li>
            <li>
              {
                darkTheme === true ?
                  <FiSun onClick={() => setDrakTheme(!darkTheme)} /> :
                  <WiMoonAltWaningCrescent5 onClick={() => setDrakTheme(!darkTheme)} />
              }
            </li>
          </ul>
          {/* <div className="header__menu-additional__options">
            <div onClick={() => dispatch(actionLanguage())}>
              <SwitchLanguages />
            </div>

            {
              darkTheme === true ?
                <FiSun onClick={() => setDrakTheme(!darkTheme)} /> :
                <WiMoonAltWaningCrescent5 onClick={() => setDrakTheme(!darkTheme)} />
            }
          </div> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
