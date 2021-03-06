import React from 'react';
import "../css/normalize.css";
import Header from './Header.jsx';
import Body from './Body.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Skills from './Skills.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <About />
      <Skills />
      <Portfolio />
    </>
  );
}

export default App;
