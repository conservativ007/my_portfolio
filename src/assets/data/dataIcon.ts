import { IIcon } from './skills';
const iconSize = 4;

interface dataIcon {
  html: IIcon;
  css: IIcon;
  js: IIcon;
  react: IIcon;
  git: IIcon;
  webpack: IIcon;
  typescript: IIcon;
  nodejs: IIcon;
  nestjs: IIcon;
  jest: IIcon;
  postgres: IIcon;
  docker: IIcon;
  redux: IIcon;
  app: IIcon;
  test: IIcon;
  en: IIcon;
  // jwt: IIcon;
}

export const dataIcon: dataIcon = {
  html: {
    name: 'html',
    size: `${iconSize}em`,
    color: '#db4d25',
  },
  css: {
    name: 'css',
    size: `${iconSize}em`,
    color: '#2862e9',
  },
  js: {
    name: 'js',
    size: `${iconSize}em`,
    color: '#efd81d',
  },
  react: {
    name: 'react',
    size: `${iconSize}em`,
    color: '#5ed3f3',
  },
  git: {
    name: 'git',
    size: `${iconSize}em`,
    color: '#e84d31',
  },
  webpack: {
    name: 'webpack',
    size: `${iconSize}em`,
    color: '#61a1df',
  },
  typescript: {
    name: 'typescript',
    size: `${iconSize}em`,
    color: '#2f74c0',
  },
  nodejs: {
    name: 'nodejs',
    size: `${iconSize}em`,
    color: '#8bbf3d',
  },
  nestjs: {
    name: 'nestjs',
    size: `${iconSize}em`,
    color: '#d9224c',
  },
  jest: {
    name: 'test',
    size: `${iconSize}em`,
    color: '#916f79',
  },
  postgres: {
    name: 'postgres',
    size: `${iconSize}em`,
    color: '#31648c',
  },
  redux: {
    name: 'redux',
    size: `${iconSize}em`,
    color: '#7248b6',
  },
  docker: {
    name: 'docker',
    size: `${iconSize}em`,
    color: '#2391e6',
  },
  app: {
    name: 'app',
    size: `${iconSize}em`,
    color: '#7248b6',
  },
  en: {
    name: 'en',
    size: `${iconSize}em`,
    color: '#7248b6',
  },
  // jwt: {
  //   name: 'jwt',
  //   size: '5em',
  //   color: '#e84d31',
  // },
  test: {
    name: 'test',
    size: `${iconSize}em`,
    color: '#916f79',
  },
};
