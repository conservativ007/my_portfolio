import React from 'react';
import '../css/skills.scss';

import { useAppSelector } from '../hooks/redux';
import {
  otherSkills,
  frontEndSkills,
  backEndSkills,
  DBSkills,
  devOpsSkills,
} from '../assets/data/skills';
import { SkillsItem } from './SkillsItem';
import { JwtIcon } from './JwtIcon';

const Skills = () => {
  const { language } = useAppSelector((state) => state.languageReducer);

  return (
    <section className="skills">
      <div className="skills-title">
        {language === 'ru' ? 'Навыки' : 'Skills'}
      </div>
      <p className="skills-describe">FrontEnd</p>
      <div className="skills-content">
        {frontEndSkills.map((skill, index) => {
          return <SkillsItem key={index} {...skill} />;
        })}
      </div>
      <p className="skills-describe">BackEnd</p>
      <div className="skills-content">
        {backEndSkills.map((skill, index) => {
          return <SkillsItem key={index} {...skill} />;
        })}
        <JwtIcon style="skill" />
      </div>

      <p className="skills-describe">DB</p>
      <div className="skills-content">
        {DBSkills.map((skill, index) => {
          return <SkillsItem key={index} {...skill} />;
        })}
      </div>
      <p className="skills-describe">DevOps</p>
      <div className="skills-content">
        {devOpsSkills.map((skill, index) => {
          return <SkillsItem key={index} {...skill} />;
        })}
      </div>
      <p className="skills-describe">Languages</p>
      <div className="skills-content">
        {otherSkills.map((skill, index) => {
          return <SkillsItem key={index} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
