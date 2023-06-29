import {
  SiHtml5,
  SiJavascript,
  SiWebpack,
  SiJest,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiRedux,
} from 'react-icons/si';
import { FaCss3, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { AiFillAppstore, AiFillGithub } from 'react-icons/ai';

import iconJwt from '../assets/images/jwt-medium.png';

import { IIcon } from '../assets/data/skills';

const styleJwt = {
  width: '60px',
  height: '60px',
};

export const Icon = (iconProp: IIcon, size?: string) => {
  if (iconProp.name === 'html')
    return <SiHtml5 size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'css')
    return <FaCss3 size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'js')
    return <SiJavascript size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'react')
    return <FaReact size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'git')
    return <AiFillGithub size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'webpack')
    return <SiWebpack size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'typescript')
    return <SiTypescript size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'nodejs')
    return <FaNodeJs size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'nestjs')
    return <SiNestjs size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'postgres')
    return <SiPostgresql size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'redux')
    return <SiRedux size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'app')
    return <AiFillAppstore size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'docker')
    return <FaDocker size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'test')
    return <SiJest size={iconProp.size} color={iconProp.color} />;
  if (iconProp.name === 'en')
    return <div style={{ fontSize: '2.7em' }}>En</div>;
  if (iconProp.name === 'jwt')
    return <img style={styleJwt} src={iconJwt} alt="jwt" />;
  return <div></div>;
};
