import "./Currentwather.css";
import React from "react";

function Currentweather(props) {
  
  
  return (
    <div className="weather">
      <div className="header">
        <h1>{props.data.city}</h1>
      </div>
      <div className="today">
        <div className="current-weather">
          <img src={`icons/${props.data.weather[0].icon}.png`} alt="" />
          <h2>{props.data.weather[0].description}</h2>
        </div>
        <div className="current-temp">
          <h1 className="temp-data">{Math.round(props.data.main.temp)} °C</h1>
          {props.data.dt_txt}
        </div>
        <div className="today-des">
          <div className="right">
            <p>
              <strong>Wind speed</strong>
            </p>
            <p>
              <strong>Humidity </strong>
            </p>
            <p>
              <strong>pressure</strong>
            </p>
          </div>
          <div className="left">
            <p>
              {props.data.wind.speed} km/hr , {props.data.wind.deg}° deg
            </p>
            <p>{props.data.main.humidity} %</p>
            <p>{props.data.main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currentweather;
