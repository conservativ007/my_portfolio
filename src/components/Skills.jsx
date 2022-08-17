import React from 'react';
import "../css/skills.scss";
import { SiHtml5 } from 'react-icons/si';
import { FaCss3 } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { SiWebpack } from 'react-icons/si';

import { useSelector } from 'react-redux';
import data from "../../assets/data/data.json";

const Skills = () => {

  const language = useSelector(state => state.languageReducer);

  return (
    <section className="skills">
      <div className="skills-title">{data[language].skills.title}</div>
      <div className="skills-content">
        <div className="skills-content__item">
          <div className="skills-content__item-icon">
            <SiHtml5 size={"5em"} color={"#db4d25"} />
          </div>
          <p className="skills-content__item-description">
            {data[language].skills.html5}
          </p>
        </div>
        <div className="skills-content__item">
          <div className="skills-content__item-icon">
            <FaCss3 size={"5em"} color={"#2862e9"} />
          </div>
          <p className="skills-content__item-description">
            {data[language].skills.css3}
          </p>
        </div>
        <div className="skills-content__item">
          <div className="skills-content__item-icon">
            <SiJavascript size={"5em"} color={"#efd81d"} />
          </div>
          <p className="skills-content__item-description">
            {data[language].skills.js}
          </p>
        </div>
        <div className="skills-content__item">
          <div className="skills-content__item-icon">
            <FaReact size={"5em"} color={"#5ed3f3"} />
          </div>
          <p className="skills-content__item-description">
            {data[language].skills.react}
          </p>
        </div>
        <div className="skills-content__item">
          <div className="skills-content__item-icon">
            <AiFillGithub size={"5em"} color={"#e84d31"} />
          </div>
          <p className="skills-content__item-description">
            {data[language].skills.git}
          </p>
        </div>
        <div className="skills-content__item">
          <div className="skills-content__item-icon">
            <SiWebpack size={"5em"} color={"#61a1df"} />
          </div>
          <p className="skills-content__item-description">
            {data[language].skills.webpack}
          </p>
        </div>
        <div className="skills-content__item">
          <div className="skills-content__item-icon custom">
            En
          </div>
          <p className="skills-content__item-description">
            {data[language].skills.english}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
