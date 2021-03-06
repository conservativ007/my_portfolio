import React from 'react';
import "../css/skills.scss";
import { SiHtml5 } from 'react-icons/si';
import { FaCss3 } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { SiWebpack } from 'react-icons/si';
import { RiEnglishInput } from 'react-icons/ri';

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="skills-title">Навыки</div>
        <div className="skills-text">
          <div className="skills-test__item">
            <div className="skills-test__item-icon">
              <SiHtml5 size={"5em"} color={"#db4d25"} />
            </div>
            <div className="skills-test__item-text">
              Изучил язык гипертекстовой разметки текста. Научился делать разметку веб-страницы, применять теги и атрибуты.
            </div>
          </div>
          <div className="skills-test__item">
            <div className="skills-test__item-icon">
              <FaCss3 size={"5em"} color={"#2862e9"} />
            </div>
            <div className="skills-test__item-text">
              Изучил язык каскадных стилей CSS. Научился стилизовать элементы, с помощию селекторов, атрибутов и классов.
            </div>
          </div>
          <div className="skills-test__item">
            <div className="skills-test__item-icon">
              <SiJavascript size={"5em"} color={"#efd81d"} />
            </div>
            <div className="skills-test__item-text">
              Изучил JavaScript для придания интерактивности веб-страницам.
            </div>
          </div>
          <div className="skills-test__item">
            <div className="skills-test__item-icon">
              <FaReact size={"5em"} color={"#5ed3f3"} />
            </div>
            <div className="skills-test__item-text">
              Изучил библиотеку реакт для разработки одностраничных приложений.
            </div>
          </div>
          <div className="skills-test__item">
            <div className="skills-test__item-icon">
              <AiFillGithub size={"5em"} color={"#e84d31"} />
            </div>
            <div className="skills-test__item-text">
              Изучил git - распределённую систему контроля версий, для упрощения разработки в команде и разбиения разработки на этапы. Научился делать коммиты, пушить, создавать ветки, пул реквесты.
            </div>
          </div>
          <div className="skills-test__item">
            <div className="skills-test__item-icon">
              <SiWebpack size={"5em"} color={"#61a1df"} />
            </div>
            <div className="skills-test__item-text">
              Научился работать со сборщиком модулей Webpack
            </div>
          </div>
          <div className="skills-test__item">
            <div className="skills-test__item-icon">
              <RiEnglishInput size={"5em"} color={"#2d3436"} />
            </div>
            <div className="skills-test__item-text">
              Владею английским языком уровня Elementary - Pre-Intermediate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
