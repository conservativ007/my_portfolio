import data from '../assets/data/data.json';

import { goTo } from '../functions/goTo';
import { useAppSelector } from '../hooks/redux';

export const OuterNavigation = () => {
  const { language } = useAppSelector((state) => state.languageReducer);

  return (
    <nav className="outer-nav vertical">
      <a
        href=""
        onClick={(e) => goTo(e, 'about', false)}
        className="outer-nav__navigate"
      >
        {data[language].about.title}
      </a>
      <a
        href=""
        onClick={(e) => goTo(e, 'skills', false)}
        className="outer-nav__navigate"
      >
        {data[language].skills.title}
      </a>
      <a
        href=""
        onClick={(e) => goTo(e, 'portfolio', false)}
        className="outer-nav__navigate"
      >
        {data[language].portfolio.title}
      </a>
    </nav>
  );
};
