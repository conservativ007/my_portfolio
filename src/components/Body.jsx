import React from 'react';
import photo from "../../assets/photo3.jpg";
import "../css/body.scss";

import { BsTelegram, BsGithub } from 'react-icons/bs';

const Body = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="body-inner">
          <div className="abut-me">
            <div className="abut-me__hello">Привет, я Максим,</div>
            <div className="abut-me__who">веб разработчик</div> 
            <div className="about-me__contacts">
             
              <div className="contacts">
                <a className="contacts-linked" href="https://linkedin.com/in/maksim-kisialiou-b87865241">
                  in
                </a>
              </div>
              
              <div className="contacts">
                <a href="https://t.me/conservariv">
                  <BsTelegram className="contacts-item"/>
                </a>
              </div>
              
              <div className="contacts">
                <a href="https://github.com/conservativ007">
                  <BsGithub className="contacts-item"/>
                </a>
              </div>
            </div>
            {/* <button className="abut-me__button">Обо мне</button> */}
            
          </div>
          <div className="my-photo">
            <img src={photo} alt="photo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
