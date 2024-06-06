import axios from 'axios';

const API_KEY = 'e8630dd8f2f9786d00b3aa784b7aacf4'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};




