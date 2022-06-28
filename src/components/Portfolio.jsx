import React from 'react';
import "../css/portfolio.scss";
import shelter from "../../assets/shelter.png";
import theKingLich from "../../assets/the-king-lich.png";
import momentum from "../../assets/momentum.png";
import webDev from "../../assets/webdev.png";

const Portfolio = () => {

  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio-title">Портфолио</div>
        <div className="portfolio-items">

          <a href="https://learn-english-with-me.netlify.app/">
            <div className="item">
              <div className="item-image learn-english">
                Easy to learn
              </div>
              <div className="item-description">
                <div className="item-description__title">Приложение для изучения Английских слов</div>
                {/* <div className="item-description__description">Изучай английские слова по карточкам, есть разные тесты и проверка на слух</div> */}
              </div>
            </div>
          </a>

          <a href="https://rolling-scopes-school.github.io/conservativ007-JS2020Q3/shelter/pages/main/">
            <div className="item">
              <div className="item-image">
                <img src={shelter} alt="shelter" />
              </div>
              <div className="item-description">
                <div className="item-description__title">Shelter</div>
                <div className="item-description__description">Сайт помощи бездомным животным</div>
              </div>
            </div> 
          </a>

          <a href="https://rolling-scopes-school.github.io/conservativ007-JS2020Q3/game-puzzle/">
            <div className="item">
            <div className="item-image">
              <img src={theKingLich} alt="king" />
            </div>
            <div className="item-description">
              <div className="item-description__title">pazzle</div>
              <div className="item-description__description">Попробуй свои силы в пазле</div>
            </div>
            </div> 
          </a>
           
          <a href="https://rolling-scopes-school.github.io/conservativ007-JS2020Q3/momentum/">
            <div className="item">
              <div className="item-image">
                <img src={momentum} alt="momentum" />
              </div>
              <div className="item-description">
                <div className="item-description__title">momentum</div>
                <div className="item-description__description">Приложение погоды</div>
              </div>
            </div> 
          </a>
          
          <a href="https://rolling-scopes-school.github.io/conservativ007-JS2020Q3/webdev/">
            <div className="item">
              <div className="item-image">
                <img src={webDev} alt="momentum" />
              </div>
              <div className="item-description">
                <div className="item-description__title">web dev</div>
                <div className="item-description__description">Вёрстка макета</div>
              </div>
            </div> 
          </a>

        </div>
      </div>
    </div>
  );
}

export default Portfolio;
