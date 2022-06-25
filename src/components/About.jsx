import React from 'react';
import "../css/about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-title">Обо мне</div>
        <div className="about-text">
          <p>Начинающий веб разработчик, верстаю адаптивные сайты по макету, а также разрабатываю скрипты на JavaScript.</p>
          <p>Успешно закончил RS School в 2021г, есть сертификаты <a href="https://app.rs.school/certificate/q8gv8p3w">JavaScript</a> и <a href="https://app.rs.school/certificate/bedir6l9">React</a>, есть опыт в командной разработке в рамках rs school, после окончания школы начал изучать английский язык и закреплять знания полученные в рамках школы.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
