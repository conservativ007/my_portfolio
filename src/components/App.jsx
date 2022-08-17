import React from 'react';
import "../css/normalize.css";
import Header from './Header.jsx';
import Body from './Body.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Skills from './Skills.jsx';

import { useSelector } from 'react-redux';
import data from "../../assets/data/data.json";

import { goTo } from '../functions/goTo';

const App = () => {

  const language = useSelector(state => state.languageReducer);

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
        <a href="" onClick={(e) => goTo(e, "about", false)} className="outer-nav__navigate" >{data[language].about.title}</a>
        <a href="" onClick={(e) => goTo(e, "skills", false)} className="outer-nav__navigate" >{data[language].skills.title}</a>
        <a href="" onClick={(e) => goTo(e, "portfolio", false)} className="outer-nav__navigate" >{data[language].portfolio.title}</a>
      </nav>
    </>
  );
}

export default App;
