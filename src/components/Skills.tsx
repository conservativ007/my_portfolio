import React from 'react';
import '../css/skills.scss';

import { useAppSelector } from '../hooks/redux';
import { skills } from '../assets/data/skills';
import { SkillsItem } from './SkillsItem';

const Skills = () => {
  const { language } = useAppSelector((state) => state.languageReducer);

  return (
    <section className="skills">
      <div className="skills-title">
        {language === 'ru' ? 'Навыки' : 'Skills'}
      </div>
      <div className="skills-content">
        {skills.map((skill, index) => {
          return <SkillsItem key={index} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
