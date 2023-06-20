import React from 'react';
import { PortfolioItem } from './PortfolioItem';
import { worksBackend } from '../assets/data/portfolioBackend';

export const WorksOnlyBackend = () => {
  return (
    <div className="portfolio-backend">
      <div className="portfolio-description">only backend</div>
      <div className="portfolio-container">
        <PortfolioItem {...worksBackend} />
      </div>
    </div>
  );
};
