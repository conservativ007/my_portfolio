import React from 'react';
import "../css/portfolio.scss";

const Portfolio = () => {

  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio-title">Портфолио</div>
        <div className="portfolio-items">
          <div className="item">
            <div className="item-image learn-english">
              Easy to learn
            </div>
            <div className="item-description">
              <div className="item-description__title">Приложение для изучения Английских слов</div>
              <div className="item-description__description">Изучай английские слова по карточкам, есть разные тесты и проверка на слух</div>
              <div className="item-description__link">
                <a href="https://learn-english-with-me.netlify.app/">посмотреть</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 335218

export default Portfolio;
