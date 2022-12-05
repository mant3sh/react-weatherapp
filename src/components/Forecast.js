import React from "react";
import "./forecast.css";
const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function Forecast(props) {
  const dayInAweek = new Date().getDay();

  const forecastDays=WEEK_DAYS.slice(dayInAweek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAweek)
  );
  console.log(props.data);
  

  
  return (
    <div className="forecast">
      {
        props.data.list.slice(0,12).map((item,idx)=>(
          <div  className="days">

              <h2>{item.dt_txt}</h2>
              <img src={`./icons/${item.weather[0].icon}.png`} alt="" />
              <h2>{item.weather[0].description}</h2>
           </div>
          
        ))}
      
      

    </div>
  );
}

export default Forecast;
