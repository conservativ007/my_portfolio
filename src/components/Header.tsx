import React, { useState, useEffect, useRef } from 'react';

import { goTo } from '../functions/goTo';

import '../css/header.scss';
import '../css/perspectivePage.scss';

import data from '../assets/data/data.json';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { languageSlice } from '../store/reducers/LanguageSlice';

import SwitchLanguages from './SwitchLanguages';
import lightOne from '../assets/images/header/light-one.svg';
import lightTwo from '../assets/images/header/light-two.svg';

const Header = () => {
  const getThemeFromLocalstorage = (): boolean => {
    let getThemFromLovalstorage = localStorage.getItem('theme');
    if (getThemFromLovalstorage === null) {
      localStorage.setItem('theme', 'dark');
      return true;
    }

    if (getThemFromLovalstorage === 'dark') {
      return true;
    }

    if (getThemFromLovalstorage === 'white') {
      return false;
    }
    return false;
  };

  const [darkTheme, setDrakTheme] = useState(getThemeFromLocalstorage());
  const ref = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const { setLanguage } = languageSlice.actions;
  const { language } = useAppSelector((state) => state.languageReducer);

  useEffect(() => {
    let elemOfRootDocument: HTMLDivElement | null =
      document.querySelector('HTML');
    if (elemOfRootDocument === null) return;

    if (darkTheme === true) {
      localStorage.setItem('theme', 'dark');
      elemOfRootDocument.className = 'dark';
    } else {
      // localStorage.removeItem('theme');
      localStorage.setItem('theme', 'white');
      elemOfRootDocument.className = '';
    }
  }, [darkTheme]);

  useEffect(() => {
    let rootDocument: HTMLDivElement | null = document.querySelector('#root');
    let container: HTMLDivElement | null = document.querySelector('.container');

    let elemOfRefElelment = ref.current;

    if (elemOfRefElelment === null) return;

    const removeClassModalview = () => {
      if (rootDocument === null) return;
      rootDocument.classList.remove('modalview');
    };

    elemOfRefElelment.addEventListener('click', (e) => {
      if (rootDocument === null) return;

      e.preventDefault();
      e.stopPropagation();
      rootDocument.classList.add('modalview');
      rootDocument.classList.add('animate');
    });

    if (container === null) return;
    container.addEventListener('click', () => {
      if (rootDocument === null) return;
      rootDocument.classList.remove('animate');
      setTimeout(removeClassModalview, 400);
    });
  }, []);

  const changeLanguage = () => {
    if (language === 'ru') {
      dispatch(setLanguage('en'));
    }
    if (language === 'en') {
      dispatch(setLanguage('ru'));
    }
  };

  const showChangeTheme = () => {
    if (darkTheme === true) {
      return <img src={lightTwo} alt="" />;
    }
    return <img src={lightOne} alt="" />;
  };

  return (
    <header className="header">
      <div className="header__content">
        <nav className="header__menu">
          <div ref={ref} className="hamburger">
            <div></div>
          </div>
          <ul>
            <li onClick={(e) => goTo(e, 'about', true)}>
              {data[language].header[0]}
            </li>
            <li onClick={(e) => goTo(e, 'skills', true)}>
              {data[language].header[1]}
            </li>
            <li onClick={(e) => goTo(e, 'portfolio', true)}>
              {data[language].header[2]}
            </li>
            <li onClick={changeLanguage}>
              <SwitchLanguages />
            </li>
            <li onClick={() => setDrakTheme((prev) => !prev)}>
              {showChangeTheme()}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
