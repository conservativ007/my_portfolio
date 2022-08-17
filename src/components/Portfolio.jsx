import React from 'react';
import "../css/portfolio.scss";

import { useSelector } from 'react-redux';
import data from "../../assets/data/data.json";

const Portfolio = () => {

  const language = useSelector(state => state.languageReducer);

  return (
    <section className="portfolio">
      <div className="portfolio-title">{data[language].portfolio.title}</div>
      <div className="portfolio-items">
        {
          data[language].portfolio.works.map((item, index) => {

            return (
              <a href={`${item.link}`} key={index}>
                <div className="item">
                  <div className="item-image">
                    <img src={require(`../../assets/images/${item.src}`)} alt={`${item.alt}`} />
                  </div>
                  <div className="item-description">
                    <div className="item-description__title">{item.title}</div>
                    <div className="item-description__description">{item.describe}</div>
                  </div>
                </div>
              </a>
            )
          })
        }
      </div>
    </section>
  );
}

export default Portfolio;
