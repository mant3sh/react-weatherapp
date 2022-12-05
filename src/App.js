import "./App.css";
import Currentweather from "./components/Currentweather";
import Search from "./components/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";
import Forecast from "./components/Forecast";

function App() {
  const [currentWeather, setCurrentweather] = useState(null);
  const [forecastWeather, setForecasttweather] = useState(null);
  const handelOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      ` ${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch])

      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentweather({ city: searchData.label, ...weatherResponse });
        setForecasttweather({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div className="app">
      <div className="container">
        <div className="searchbar">
          <Search onSearchChange={handelOnSearchChange} />
        </div>

        {currentWeather && (
          <Currentweather data={currentWeather}  />
        )}
       { forecastWeather &&  (<Forecast  data={forecastWeather} />)}
      </div>
    </div>
  );
}

export default App;
