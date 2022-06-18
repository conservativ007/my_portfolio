import React from 'react';
import photo from "../../assets/photo3.jpg";
import "../css/body.scss";

const Body = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="body-inner">
          <div className="abut-me">
            Привет, я Максим, 
            <div>веб разработчик</div> 
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
