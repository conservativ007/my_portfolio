import React from 'react';
import '../css/normalize.css';
import Header from './Header';
import Body from './Body';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import '../css/scrollbar.css';
import { OuterNavigation } from './OuterNavigation';

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
      <OuterNavigation />
    </>
  );
};

export default App;
