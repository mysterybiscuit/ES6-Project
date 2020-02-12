import * as ELEMENTS from "./elements";
import { HTTP } from "./http";

const searchWeather = () => {
  const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
  if (CITY_NAME.length === 0) {
    return alert("Please enter a city name!");
  }
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${"072804ba258766f68e7ed00c7deeebbc"}`;
  HTTP.fetchData(URL)
    .then(responseData => {})
    .catch(error => {
      alert(error);
    });
};

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener("click", searchWeather);
