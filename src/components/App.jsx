import React from 'react';
import "../css/normalize.css";
import Header from './Header.jsx';
import Body from './Body.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Skills from './Skills.jsx';

import { goTo } from '../functions/goTo';

const App = () => {
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
      <nav className="outer-nav right vertical">
        <a href="" onClick={(e) => goTo(e, "about")} className="outer-nav__navigate" >Обо мне</a>
        <a href="" onClick={(e) => goTo(e, "skills")} className="outer-nav__navigate" >Навыки</a>
        <a href="" onClick={(e) => goTo(e, "portfolio")} className="outer-nav__navigate" >Портфолио</a>
      </nav>
    </>
  );
}

export default App;
