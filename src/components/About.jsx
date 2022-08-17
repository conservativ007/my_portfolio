import React, { useEffect, useRef } from 'react';
import "../css/about.scss";

import { useSelector } from 'react-redux';
import data from "../../assets/data/data.json";

const About = () => {

  const ref = useRef(null);
  const language = useSelector(state => state.languageReducer);

  useEffect(() => {
    let getJavaScriptReplace = ref.current.innerHTML.replace("JavaScript", `<a href="${data[language].about.links[0]}">JavaScript</a>`);
    ref.current.innerHTML = getJavaScriptReplace;

    let getReactReplace = ref.current.innerHTML.replace("React", `<a href="${data[language].about.links[1]}">React</a>`);
    ref.current.innerHTML = getReactReplace;
  }, [ref, language]);


  return (
    <section className="about">
      <div className="about-title">{data[language].about.title}</div>
      <div className="about-text">
        <p>{data[language].about["content-one"]}</p>
        <p ref={ref} >{data[language].about["content-two"]}</p>
      </div>
    </section>
  );
}

export default About;
