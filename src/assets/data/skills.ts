import { dataIcon } from './dataIcon';

export interface IIcon {
  name: string;
  size: string;
  color: string;
}

export interface ISkillDescription {
  ru: string;
  en: string;
}

export interface ISkillsData {
  image: IIcon;
  skill: ISkillDescription;
}

export const skills: ISkillsData[] = [
  {
    image: dataIcon.html,
    skill: {
      ru: 'Изучил язык гипертекстовой разметки текста. Научился делать разметку веб-страницы, применять теги и атрибуты.',
      en: 'Learned Hypertext Markup Language. I learned how to mark up a web page, apply tags and attributes.',
    },
  },
  {
    image: dataIcon.css,
    skill: {
      ru: 'Изучил язык каскадных стилей CSS. Научился стилизовать элементы, с помощию селекторов, атрибутов и классов.',
      en: 'Learned CSS cascading style language. Learned how to style elements using selectors, attributes and classes.',
    },
  },
  {
    image: dataIcon.js,
    skill: {
      ru: 'Изучил JavaScript для придания интерактивности веб-страницам.',
      en: 'Learned JavaScript to add interactivity to web pages.',
    },
  },
  {
    image: dataIcon.react,
    skill: {
      ru: 'Изучил библиотеку реакт для разработки одностраничных приложений.',
      en: 'Learned the React library for developing single-page applications.',
    },
  },
  {
    image: dataIcon.git,
    skill: {
      ru: 'Изучил git - распределённую систему контроля версий, для упрощения разработки в команде и разбиения разработки на этапы. Научился делать коммиты, пушить, создавать ветки, пул реквесты.',
      en: 'Learned git - a distributed version control system, to simplify development in a team and break development into stages. I learned how to make commits, push, create branches, pull requests.',
    },
  },
  {
    image: dataIcon.webpack,
    skill: {
      ru: 'Научился работать со сборщиком модулей Webpack.',
      en: 'Learned how to work with the Webpack module builder.',
    },
  },

  {
    image: dataIcon.typescript,
    skill: {
      ru: 'Изучил TypeScript. Типы, интерфейсы, дженерики, операторы.',
      en: 'Learned TypeScript. Types, interfaces, generics, operators.',
    },
  },
  {
    image: dataIcon.nodejs,
    skill: {
      ru: 'Изучил NodeJS. Работа с файлами. Модуль cluster. Модуль events, Event emitter. Cтримы readable, writable. Основы HTTP.',
      en: 'Learned NodeJS. Working with files. cluster module. Events module, Event emitter. Streams readable, writable. HTTP Basics.',
    },
  },
  {
    image: dataIcon.nestjs,
    skill: {
      ru: 'Научился работать с NestJS. Создание и работа с API, логирование, исключения, валидация входящих параметров, работа с JWT токенами, подключение базы данных.',
      en: 'Learned work with NestJS. Creating and working with API, logging, exceptions, validating incoming parameters, working with JWT tokens, connecting a database.',
    },
  },
  {
    image: dataIcon.test,
    skill: {
      ru: 'Научился писать e2e тесты.',
      en: 'Learned to write e2e tests.',
    },
  },
  {
    image: {
      name: 'english',
      size: '5em',
      color: '#e84d31',
    },
    skill: {
      ru: 'Владею английским языком уровня Elementary - Pre-Intermediate.',
      en: 'I speak English at the level of Elementary - Pre-Intermediate.',
    },
  },
];
