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

export const frontEndSkills: ISkillsData[] = [
  {
    image: dataIcon.html,
    skill: {
      ru: 'Изучил язык гипертекстовой разметки текста. Научился делать разметку веб-страницы, применять теги и атрибуты.',
      en: 'I learned Hypertext Markup Language. I learned how to mark up a web page, apply tags and attributes.',
    },
  },
  {
    image: dataIcon.css,
    skill: {
      ru: 'Изучил язык каскадных стилей CSS. Научился стилизовать элементы, с помощию селекторов, атрибутов и классов.',
      en: 'I learned CSS cascading style language. Learned how to style elements using selectors, attributes and classes.',
    },
  },
  {
    image: dataIcon.js,
    skill: {
      ru: 'Изучил JavaScript для придания интерактивности веб-страницам.',
      en: 'I learned JavaScript to add interactivity to web pages.',
    },
  },
  {
    image: dataIcon.react,
    skill: {
      ru: 'Изучил библиотеку реакт для разработки одностраничных приложений.',
      en: 'I learned the React library for developing single-page applications.',
    },
  },
  {
    image: dataIcon.webpack,
    skill: {
      ru: 'Научился работать со сборщиком модулей Webpack.',
      en: 'I learned how to work with the Webpack module builder.',
    },
  },
];

export const backEndSkills: ISkillsData[] = [
  {
    image: dataIcon.nodejs,
    skill: {
      ru: 'Изучил NodeJS. Работа с файлами. Модуль cluster. Модуль events, Event emitter. Cтримы readable, writable. Основы HTTP.',
      en: 'I learned NodeJS. Working with files. cluster module. Events module, Event emitter. Streams readable, writable. HTTP Basics.',
    },
  },
  {
    image: dataIcon.nestjs,
    skill: {
      ru: 'Научился работать с NestJS. Создание и работа с API, логирование, исключения, валидация входящих параметров, работа с JWT токенами, подключение базы данных.',
      en: 'I learned work with NestJS. Creating and working with API, logging, exceptions, validating incoming parameters, working with JWT tokens, connecting a database.',
    },
  },
  // {
  //   image: dataIcon.jwt,
  //   skill: {
  //     ru: 'Изучил работу с JWT токенами, понимаю для чего это нужно, реализовал API c созданием и отправкой JWT токена пользователю и затем последующей валидацей токена.',
  //     en: 'I learnd working with JWT tokens, I understand why it is needed, I implemented an API with the creation and sending of a JWT token to the user and then the subsequent validation of the token.',
  //   },
  // },
  {
    image: dataIcon.typescript,
    skill: {
      ru: 'Изучил TypeScript. Типы, интерфейсы, дженерики, операторы.',
      en: 'I learned TypeScript. Types, interfaces, generics, operators.',
    },
  },
  {
    image: dataIcon.test,
    skill: {
      ru: 'Научился писать e2e тесты.',
      en: 'I learned to write e2e tests.',
    },
  },
];

export const DBSkills: ISkillsData[] = [
  {
    image: dataIcon.postgres,
    skill: {
      ru: 'Научился работать с Postgres + TypeOrm, CRUD операции.',
      en: 'I learned to work with Postgres + TypeOrm, CRUD operations.',
    },
  },
];
export const devOpsSkills: ISkillsData[] = [
  {
    image: dataIcon.git,
    skill: {
      ru: 'Изучил git - распределённую систему контроля версий, для упрощения разработки в команде и разбиения разработки на этапы. Научился делать коммиты, пушить, создавать ветки, пул реквесты.',
      en: 'I learned git - a distributed version control system, to simplify development in a team and break development into stages. I learned how to make commits, push, create branches, pull requests.',
    },
  },
  {
    image: dataIcon.docker,
    skill: {
      ru: 'Научился работать с Docker, осознал что это и почему это круто. Создание контейнеров, конфигурирование файла Dockerfile и Dockercompose, поиск и скачивание Docker images.',
      en: "I learned how to work with Docker, realized what it is and why it's cool. Creating containers, configuring the Dockerfile and Dockercompose, searching and downloading Docker images.",
    },
  },
];

export const otherSkills: ISkillsData[] = [
  {
    image: dataIcon.en,
    skill: {
      ru: 'Владею английским языком уровня Elementary - Pre-Intermediate.',
      en: 'I speak English at the level of Elementary - Pre-Intermediate.',
    },
  },
];
