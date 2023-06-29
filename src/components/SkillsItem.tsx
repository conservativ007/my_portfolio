import { ISkillsData } from '../assets/data/skills';
import { Icon } from './Icon';
import { useAppSelector } from '../hooks/redux';

export const SkillsItem = (skill: ISkillsData) => {
  const { language } = useAppSelector((state) => state.languageReducer);

  return (
    <div className="skills-content__item">
      <div className="skills-content__item-icon">
        <Icon key={Date.now()} {...skill.image} />
      </div>
      <p className="skills-content__item-description">
        {skill.skill[language]}
      </p>
    </div>
  );
};
