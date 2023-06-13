
// Base URL for the OpenWeatherMap API
const BASE_URL = 'https://api.openweathermap.org';

const API_KEY = ''; // Your API key goes here

export const getWeatherForecast = async (latitude, longitude) => {

  // Get weather forecast based on latitude and longitude
  try {
    const apiUrl = `${BASE_URL}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&units=metric&appid=${API_KEY}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }

  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    throw error;
  }
};
