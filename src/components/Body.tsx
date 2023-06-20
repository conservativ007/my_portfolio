import React from 'react';
import photo from '../assets/images/photo-test3.png';
import '../css/body.scss';

import { BsTelegram, BsGithub } from 'react-icons/bs';

import { useAppSelector } from '../hooks/redux';
import data from '../assets/data/data.json';

const Body = () => {
  const { language } = useAppSelector((state) => state.languageReducer);

  return (
    <section className="body">
      <div className="body-fon"></div>
      <div className="body-inner">
        <div className="abut-me">
          <div className="abut-me__hello">
            {data[language].body['welcom-phrase-1']}
          </div>
          <div className="abut-me__who">
            {data[language].body['welcom-phrase-2']}
          </div>
          <div className="about-me__contacts">
            <div className="contacts">
              <a
                className="contacts-linked"
                href="https://linkedin.com/in/maksim-kisialiou-b87865241"
              >
                in
              </a>
            </div>

            <div className="contacts">
              <a href="https://t.me/conservariv">
                <BsTelegram className="contacts-item" />
              </a>
            </div>

            <div className="contacts">
              <a href="https://github.com/conservativ007">
                <BsGithub className="contacts-item" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="my-photo"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
      </div>
    </section>
  );
};

export default Body;
