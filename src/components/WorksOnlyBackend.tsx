import React from 'react';
import { useAppSelector } from '../hooks/redux';
// import { worksOnlyBackendData } from '../assets/data/index';
import image from '../assets/images/GitHub_Logo_White.png';
import { PortfolioItem } from './PortfolioItem';
import { worksBackend } from '../assets/data/portfolioBackend';

export const WorksOnlyBackend = () => {
  const { language } = useAppSelector((state) => state.languageReducer);

  // let url = 'https://github.com/conservativ007/nodejs2022Q4-service'

  return (
    <div className="portfolio-backend">
      <div className="portfolio-description">only backend</div>
      <div className="portfolio-container">
        <PortfolioItem {...worksBackend} />
      </div>
    </div>
  );
};
