import React from 'react';
import '../css/portfolio.scss';

import { useAppSelector } from '../hooks/redux';
import data from '../assets/data/data.json';
import { WorksFrontendOnly } from './WorksFrontendOnly';
import { WorksBackendPlusFrontend } from './WorksBackendPlusFrontend';
import { WorksOnlyBackend } from './WorksOnlyBackend';

const Portfolio = () => {
  const { language } = useAppSelector((state) => state.languageReducer);

  return (
    <section className="portfolio">
      <div className="portfolio-title">{data[language].portfolio.title}</div>
      <WorksOnlyBackend />
      <WorksBackendPlusFrontend />
      <WorksFrontendOnly />
    </section>
  );
};

export default Portfolio;
