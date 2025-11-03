// API call function using OpenWeather API
const API_KEY = "YOUR_API_KEY"; // get from https://openweathermap.org/api

export const fetchWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    if (data.cod !== 200) throw new Error(data.message);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};