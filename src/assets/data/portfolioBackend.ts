import { IIcon, ISkillDescription } from './skills';
import { dataIcon } from './dataIcon';

export interface IPortfolioItem {
  type?: string;
  title: ISkillDescription;
  description: ISkillDescription;
  technologyStack: IIcon[];

  links: {
    url: string;
    github: string;
  };
}

const worksBackend: IPortfolioItem = {
  type: 'backend',
  title: {
    en: 'NestJS API',
    ru: 'NestJS API',
  },
  description: {
    en: 'Home Library Service!',
    ru: 'Служба домашней библиотеки!',
  },
  technologyStack: [
    dataIcon.nestjs,
    dataIcon.test,
    dataIcon.typescript,
    dataIcon.postgres,
  ],
  links: {
    url: '',
    github: 'https://github.com/conservativ007/nodejs2022Q4-service',
  },
};

const worksBackendAndFrontend: IPortfolioItem = {
  type: 'backend',
  title: {
    en: 'Chat app',
    ru: 'Онлайн чат',
  },
  description: {
    en: 'Chat with friends, meet!',
    ru: 'Общайтесь с друзьями, знакомтесь!',
  },
  technologyStack: [
    dataIcon.html,
    dataIcon.css,
    dataIcon.nestjs,
    dataIcon.react,
    dataIcon.redux,
    dataIcon.test,
    dataIcon.typescript,
    dataIcon.postgres,
  ],
  links: {
    url: 'http://85.209.148.189:3000/',
    github: 'https://github.com/conservativ007/chat-server',
  },
};

export { worksBackend, worksBackendAndFrontend };
