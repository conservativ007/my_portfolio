import { dataIcon } from './dataIcon';
import { IPortfolioItem } from './portfolioBackend';

export const worksFrontend: IPortfolioItem[] = [
  {
    title: {
      en: 'Learn English',
      ru: 'Learn English',
    },
    description: {
      en: 'Application for learning English words',
      ru: 'Приложение для изучения Английских слов',
    },
    technologyStack: [
      dataIcon.html,
      dataIcon.css,
      dataIcon.js,
      dataIcon.react,
      dataIcon.redux,
    ],
    links: {
      url: 'https://learn-english-by-conservative.netlify.app',
      github: 'https://github.com/conservativ007/learn-english',
    },
  },
  {
    title: {
      en: 'Shelter',
      ru: 'Shelter',
    },
    description: {
      en: 'Help website for homeless animals',
      ru: 'Сайт помощи бездомным животным',
    },
    technologyStack: [dataIcon.html, dataIcon.css, dataIcon.js],
    links: {
      url: 'https://conservativ007.github.io/shelter/',
      github: 'https://github.com/conservativ007/shelter',
    },
  },
  {
    title: {
      en: 'Pazzle',
      ru: 'Пазл',
    },
    description: {
      en: 'Try your hand at the puzzle',
      ru: 'Попробуй свои силы в пазле',
    },
    technologyStack: [dataIcon.html, dataIcon.css, dataIcon.js],
    links: {
      url: 'https://rolling-scopes-school.github.io/conservativ007-JS2020Q3/game-puzzle/',
      github:
        'https://github.com/rolling-scopes-school/conservativ007-JS2020Q3',
    },
  },
  {
    title: {
      en: 'Momentum',
      ru: 'Momentum',
    },
    description: {
      en: 'Weather app',
      ru: 'Приложение погоды',
    },
    technologyStack: [
      dataIcon.html,
      dataIcon.css,
      dataIcon.js,
      dataIcon.react,
      dataIcon.webpack,
    ],
    links: {
      url: 'https://momentumbyconservativ.netlify.app/',
      github: 'https://github.com/conservativ007/momentum',
    },
  },
  {
    title: {
      en: 'Web dev',
      ru: 'Web dev',
    },
    description: {
      en: 'Page layout',
      ru: 'Вёрстка макета',
    },
    technologyStack: [dataIcon.html, dataIcon.css, dataIcon.js],
    links: {
      url: 'https://conservativ007.github.io/webdev/',
      github: 'https://github.com/conservativ007/webdev',
    },
  },
  {
    title: {
      en: 'English for kids',
      ru: 'English for kids',
    },
    description: {
      en: 'Learning some of English words for the little ones',
      ru: 'Изучение некоторых английских слов для самых маленьких',
    },
    technologyStack: [dataIcon.html, dataIcon.css, dataIcon.js],
    links: {
      url: 'https://conservativ007.github.io/english-for-kids/',
      github: 'https://github.com/conservativ007/english-for-kids',
    },
  },
  {
    title: {
      en: 'Tic tac toe',
      ru: 'Крестики нолики',
    },
    description: {
      en: 'Game tic tac toe',
      ru: 'Игра крестики нолики',
    },
    technologyStack: [
      dataIcon.html,
      dataIcon.css,
      dataIcon.js,
      dataIcon.react,
      dataIcon.redux,
    ],
    links: {
      url: 'https://tic-tac-toe-conservative.netlify.app/',
      github: 'https://github.com/conservativ007/react-game',
    },
  },
  {
    title: {
      en: 'Blade runner',
      ru: 'Бегущий по лезвию',
    },
    description: {
      en: 'Game blade runner',
      ru: 'Игра бегущий по лезвию',
    },
    technologyStack: [
      dataIcon.html,
      dataIcon.css,
      dataIcon.js,
      dataIcon.webpack,
    ],
    links: {
      url: 'https://blade-runner-2021.netlify.app/',
      github: 'https://github.com/conservativ007/rsclone',
    },
  },
];
