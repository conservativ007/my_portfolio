import React, { useEffect, useRef } from 'react';
import '../css/about.scss';

import { useAppSelector } from '../hooks/redux';
import data from '../assets/data/data.json';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { language } = useAppSelector((state) => state.languageReducer);

  useEffect(() => {
    let elemOfRef = ref.current;
    if (elemOfRef === null) return;

    let getJavaScriptReplace = elemOfRef.innerHTML.replace(
      'JavaScript',
      `<a href="${data[language].about.links[0]}">JavaScript</a>`
    );
    elemOfRef.innerHTML = getJavaScriptReplace;

    let getReactReplace = elemOfRef.innerHTML.replace(
      'React',
      `<a href="${data[language].about.links[1]}">React</a>`
    );
    elemOfRef.innerHTML = getReactReplace;
  }, [ref, language]);

  return (
    <section className="about">
      <div className="about-title">{data[language].about.title}</div>
      <div className="about-text">
        <p>{data[language].about['content-first']}</p>
        <p ref={ref}>{data[language].about['content-second']}</p>
        <p>{data[language].about['content-third']}</p>
      </div>
    </section>
  );
};

export default About;
