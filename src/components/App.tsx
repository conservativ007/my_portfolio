import React from 'react';
import '../css/normalize.css';
import Header from './Header';
import Body from './Body';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';

import { useAppSelector } from '../hooks/redux';
import data from '../assets/data/data.json';

import { goTo } from '../functions/goTo';

const App = () => {
  const { language } = useAppSelector((state) => state.languageReducer);
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Header />
          <Body />
          <About />
          <Skills />
          <Portfolio />
        </div>
      </div>
      <nav className="outer-nav vertical">
        <a
          href=""
          onClick={(e) => goTo(e, 'about', false)}
          className="outer-nav__navigate"
        >
          {data[language].about.title}
        </a>
        <a
          href=""
          onClick={(e) => goTo(e, 'skills', false)}
          className="outer-nav__navigate"
        >
          {language === 'ru' ? 'Навыки' : 'Skills'}
        </a>
        <a
          href=""
          onClick={(e) => goTo(e, 'portfolio', false)}
          className="outer-nav__navigate"
        >
          {data[language].portfolio.title}
        </a>
      </nav>
    </>
  );
};

export default App;
