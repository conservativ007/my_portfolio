import React from 'react';
import { worksFrontend } from '../assets/data/portfolioFrontend';
import { PortfolioItem } from './PortfolioItem';

export const WorksFrontendOnly = () => {
  return (
    <>
      <div className="portfolio-frontend">
        <div className="portfolio-description">only frontend</div>
        <div className="portfolio-container">
          {worksFrontend.map((item, index) => {
            return <PortfolioItem {...item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
