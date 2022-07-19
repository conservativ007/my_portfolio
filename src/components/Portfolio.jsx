import React from 'react';
import "../css/portfolio.scss";
import shelter from "../../assets/shelter.png";
import theKingLich from "../../assets/the-king-lich.png";
import momentum from "../../assets/momentum.png";
import webDev from "../../assets/webdev.png";
import englishForKids from "../../assets/english-for-kids.png";
import ticTacToe from "../../assets/tic-tac-toe.png";
import bladeRunner from "../../assets/blade-runner.png";

const Portfolio = () => {

  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio-title">Портфолио</div>
        <div className="portfolio-items">

          <a href="https://learn-english-by-conservative.netlify.app">
            <div className="item">
              <div className="item-image learn-english">
                Easy to learn
              </div>
              <div className="item-description">
                <div className="item-description__title">Приложение для изучения Английских слов</div>
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
              <div className="item-description__title">Pazzle</div>
              <div className="item-description__description">Попробуй свои силы в пазле</div>
            </div>
            </div> 
          </a>
           
          <a href="https://momentumbyconservativ.netlify.app/">
            <div className="item">
              <div className="item-image">
                <img src={momentum} alt="momentum" />
              </div>
              <div className="item-description">
                <div className="item-description__title">Momentum</div>
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
                <div className="item-description__title">Web dev</div>
                <div className="item-description__description">Вёрстка макета</div>
              </div>
            </div> 
          </a>
          
          <a href="https://rolling-scopes-school.github.io/conservativ007-JS2020Q3/english-for-kids/">
            <div className="item">
              <div className="item-image">
                <img src={englishForKids} alt="englishForKids" />
              </div>
              <div className="item-description">
                <div className="item-description__title">English for kids</div>
                <div className="item-description__description">Изучение некоторых английских слов для самых маленьких</div>
              </div>
            </div> 
          </a>
          
          <a href="https://conservativ007-react-game.netlify.app/">
            <div className="item">
              <div className="item-image">
                <img src={ticTacToe} alt="tic-tac-toe" />
              </div>
              <div className="item-description">
                <div className="item-description__title">Tic tac toe</div>
                <div className="item-description__description">Игра крестики нолики</div>
              </div>
            </div> 
          </a>
          
          <a href="https://blade-runner-2021.netlify.app/">
            <div className="item">
              <div className="item-image">
                <img src={bladeRunner} alt="blade-runner" />
              </div>
              <div className="item-description">
                <div className="item-description__title">Blade runner</div>
                <div className="item-description__description">Игра бегущий по лезвию</div>
              </div>
            </div> 
          </a>

        </div>
      </div>
    </div>
  );
}

export default Portfolio;
