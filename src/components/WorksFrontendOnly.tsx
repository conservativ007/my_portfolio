import React from 'react';
import data from '../assets/data/data.json';
import { useAppSelector } from '../hooks/redux';
import { worksFrontend } from '../assets/data/portfolioFrontend';
import { PortfolioItem } from './PortfolioItem';

export const WorksFrontendOnly = () => {
  const { language } = useAppSelector((state) => state.languageReducer);

  return (
    <>
      <div className="portfolio-frontend">
        <div className="portfolio-description">
          {data[language].portfolio['describe-frontend']}
        </div>
        <div className="portfolio-container">
          {worksFrontend.map((item, index) => {
            return <PortfolioItem {...item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
