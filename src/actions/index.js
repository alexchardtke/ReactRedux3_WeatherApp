import axios from 'axios';

// This is the ActionCreator

const API_KEY = '50da9b33ef76bce179ac00e7498dc3fe';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Middlewares are Action gatekeepers  - functions that can let an action pass, manipulate it, log it, or stop it from going to the reducer
// ("Modify actions" before the reducer)

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // request is a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
