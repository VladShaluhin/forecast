import axios from 'axios'

const API_KEY = 'b1b15e88fa797225412429c1c50c122a1';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => ({
    type: FETCH_WEATHER,
    payload: axios.get(`${ROOT_URL}&q=${city},us`)
});