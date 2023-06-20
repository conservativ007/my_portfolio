import React from 'react';
import { worksBackendAndFrontend } from '../assets/data/portfolioBackend';

import { PortfolioItem } from './PortfolioItem';

export const WorksBackendPlusFrontend = () => {
  return (
    <div className="portfolio-backend">
      <div className="portfolio-description">backend plus frontend</div>
      <div className="portfolio-container">
        <PortfolioItem {...worksBackendAndFrontend} />
      </div>
    </div>
  );
};
