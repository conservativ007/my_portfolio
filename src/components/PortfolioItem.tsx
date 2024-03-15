import { IPortfolioItem } from '../assets/data/portfolioBackend';
import { useAppSelector } from '../hooks/redux';
import { Icon } from './Icon';
import { dataIcon } from '../assets/data/dataIcon';
import { log } from 'console';
import { JwtIcon } from './JwtIcon';

export const PortfolioItem = (item: IPortfolioItem) => {
  const { language } = useAppSelector((state) => state.languageReducer);

  // console.log(item);

  return (
    <div className="portfolio-item">
      <div className="title">{item.title[language]}</div>
      <div className="description">{item.description[language]}</div>
      <div className="stack">
        <div className="stack-description">technology stack</div>
        {item.technologyStack.map((elem, index) => (
          <Icon key={index} {...elem} size="1.7em" />
        ))}
        {item?.type === 'backend' && <JwtIcon style="stack" />}
      </div>
      <div className="links">
        {/* <div className="links-description">ссылки</div> */}
        <div className="links-items">
          <div className="link-github">
            <a href={item.links.github}>
              {language === 'ru' ? 'ссылка на гитхаб' : 'github link'}

              {/* <Icon key={Date.now()} {...dataIcon.git} size="1.7em" /> */}
            </a>
          </div>
          {item.links.url === '' ? (
            ''
          ) : (
            <div className="link-app">
              <a href={item.links.url}>
                {language === 'ru' ? 'ссылка на сайт' : 'website link'}
                {/* <Icon key={Date.now()} {...dataIcon.app} size="1.7em" /> */}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
